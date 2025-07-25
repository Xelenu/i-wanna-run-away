const SERVER_HOST = ".";

function waitFor(s, i) {
  return new Promise((e, t) => {
    let r = 0;
    s(globalThis) ? e() : (r = setInterval(function() {
      s(globalThis) && (clearInterval(r), e())
    }, 100), i && setTimeout(t, i))
  })
}
async function loadScript({
  src: s,
  check: i,
  insertTarget: n
}) {
  if (!i || !i(globalThis)) return document.querySelector(`script[src="${s}"]`) ? i ? waitFor(i) : Promise.resolve() : new Promise((e, t) => {
    const r = document.createElement("script");
    if (r.src = s, r.onload = () => e(i ? waitFor(i) : void 0), r.onerror = () => t(), r.onabort = () => t(), n) n.selector.insertAdjacentElement(n.position, r);
    else try {
      document.querySelector("script").parentElement.appendChild(r)
    } catch (e) {
      t(e)
    }
  })
}
globalThis.C3.Plugins.Eponesh_GameScore.Instance = class extends globalThis.ISDKInstanceBase {
  constructor(e) {
    super(), this.mappers = {
      language: ["en", "ru", "fr", "it", "de", "es", "zh", "pt", "ko", "ja", "tr", "ar", "hi", "id"],
      syncStorage: ["preferred", "cloud", "platform", "local"],
      storageType: ["platform", "local"],
      avatarGenerator: ["dicebear_retro", "dicebear_identicon", "dicebear_human", "dicebear_micah", "dicebear_bottts", "icotar", "robohash_robots", "robohash_cats"],
      order: ["default", "DESC", "ASC"],
      withMe: ["none", "first", "last"],
      platform: ["YANDEX", "VK", "NONE", "OK", "GAME_MONETIZE", "CRAZY_GAMES", "GAME_DISTRIBUTION", "SMARTMARKET", "GAMEPIX", "POKI", "VK_PLAY", "WG_PLAYGROUND", "KONGREGATE", "GOOGLE_PLAY", "PLAYDECK", "APP_GALLERY", "GALAXY_STORE", "ONE_STORE", "AMAZON_APPSTORE", "XIAOMI_GETAPPS", "APTOIDE", "RUSTORE", "ANDROID", "TELEGRAM", "BEELINE", "FOTOSTRANA"],
      deviceTypes: ["Desktop", "IOS", "Android", "TV"],
      documentTypes: ["PLAYER_PRIVACY_POLICY"],
      documentFormat: ["HTML", "TXT", "RAW"],
      bonusType: ["REWARD", "ACHIEVEMENT", "PRODUCT"],
      schedulerType: ["ACTIVE_DAYS", "ACTIVE_DAYS_CONSECUTIVE"],
      variablesTypes: ["stats", "data", "flag", "image", "file", "doc_html"],
      compare: [(e, t) => e === t, (e, t) => e !== t, (e, t) => e < t, (e, t) => e <= t, (e, t) => t < e, (e, t) => t <= e]
    }, this.etos = function(e) {
      return "string" == typeof e ? e : "message" in e ? e.message : String(e)
    }, this.getIdOrTag = e => {
      var t = parseInt(e, 10) || 0;
      return 0 < t ? {
        id: t
      } : {
        tag: e
      }
    }, this.conditions = globalThis.C3.Plugins.Eponesh_GameScore.Cnds, this.actions = globalThis.C3.Plugins.Eponesh_GameScore.Acts, this.handleResult = (e, t) => {
      this.isLastActionSuccess = !!e, t && (this.lastError = this.etos(t), console.warn(t))
    }, this.awaiters = {
      player: {},
      gp: {}
    }, this.awaiters.gp.ready = new Promise((e, t) => {
      this.awaiters.gp.done = e, this.awaiters.gp.abort = t
    }), this.awaiters.player.ready = new Promise((e, t) => {
      this.awaiters.player.done = e, this.awaiters.player.abort = t
    }), this.leaderboard = [], this.leaderboardInfo = {}, this.leaderboardRecords = {}, this.leaderboardResult = {
      abovePlayers: [],
      belowPlayers: [],
      topPlayers: []
    }, this.currentLeaderboardIndex = 0, this.currentLeaderboardPlayer = {}, this.lastLeaderboardTag = "", this.lastLeaderboardVariant = "", this.lastLeaderboardPlayerRatingTag = "", this.leaderboardPlayerPosition = 0, this.platformVariables = {}, this.currentPlayerFieldKey = "", this.currentPlayerFieldType = "", this.currentPlayerFieldName = "", this.currentPlayerFieldValue = "", this.currentUniquesTag = "", this.currentUniquesValue = "", this.storageCurKey = "", this.storageCurValue = "", this.currentPlayerFieldVariantValue = "", this.currentPlayerFieldVariantName = "", this.currentPlayerFieldVariantIndex = 0, this.achievements = [], this.achievementsGroups = [], this.playerAchievements = [], this.currentAchievementIndex = 0, this.currentAchievement = {}, this.currentAchievementsGroupIndex = 0, this.currentAchievementsGroupId = 0, this.currentAchievementsGroupTag = "", this.currentAchievementsGroupName = "", this.currentAchievementsGroupDescription = "", this.currentPlayerAchievementIndex = 0, this.currentPlayerAchievementId = 0, this.currentPlayerAchievementUnlockDate = "", this.isUnlockAchievementSuccess = !1, this.unlockAchievementError = "", this.isSetProgressAchievementSuccess = !1, this.setProgressAchievementError = "", this.products = [], this.playerPurchases = [], this.currentProductIndex = 0, this.currentProduct = {
      id: 0,
      tag: "",
      name: "",
      description: "",
      icon: "",
      iconSmall: "",
      price: 0,
      currency: "",
      currencySymbol: ""
    }, this.currentProductPurchases = 0, this.currentPurchaseIndex = 0, this.currentPurchase = {
      id: 0,
      tag: "",
      createdAt: "",
      expiredAt: "",
      subscribed: !1
    }, this.isSubscribeProductSuccess = !1, this.isUnsubscribeProductSuccess = !1, this.isPurchaseProductSuccess = !1, this.purchaseProductError = "", this.purchasedProductId = 0, this.purchasedProductTag = "", this.isConsumeProductSuccess = !1, this.consumeProductError = "", this.consumedProductId = 0, this.consumedProductTag = "", this.lastRewardedTag = "", this.isLastAdSuccess = !1, this.isLastShareSuccess = !1, this.isLastCommunityJoinSuccess = !1, this.isLastAddShortcutSuccess = !1, this.isReady = !1, this.isPlayerReady = !1, this.gamesCollection = {
      id: 0,
      tag: "",
      name: "",
      description: "",
      games: []
    }, this.currentGameIndex = 0, this.currentGameId = 0, this.currentGameName = "", this.currentGameDescription = "", this.currentGameIcon = "", this.currentGameUrl = "", this.gamesCollectionFetchError = "", this.lastGamesCollectionIdOrTag = "", this.document = {
      type: "",
      content: ""
    }, this.lastDocumentType = "", this.documentFetchError = "", this.lastError = "", this.isLastActionSuccess = !1, this.shareLink = "", this.shareParams = {}, this.images = [], this.canLoadMoreImages = !1, this.currentImageIndex = 0, this.currentImageTagIndex = 0, this.currentImageTag = "", this.lastImageTempUrl = "", this.currentImage = {
      id: "",
      playerId: 0,
      width: 0,
      height: 0,
      src: "",
      tags: []
    }, this.files = [], this.lastFileContent = "", this.canLoadMoreFiles = !1, this.currentFileIndex = 0, this.currentFileTagIndex = 0, this.currentFileTag = "", this.lastFileTempUrl = "", this.currentFile = {
      id: "",
      playerId: 0,
      name: "",
      size: 0,
      src: "",
      tags: []
    }, this.currentVariableIndex = 0, this.currentVariable = {
      key: "",
      type: "",
      value: ""
    }, this.currentPlayersIndex = 0, this.lastPlayersTag = "", this.currentPlayersPlayer = {
      state: {},
      achievements: [],
      purchases: []
    }, this.curRewardIndex = 0, this.curReward = {}, this.curPlayerReward = {}, this.setReward = (e = {}, t = 0) => {
      this.curRewardIndex = t, this.curReward = e.reward || {}, this.curPlayerReward = e.playerReward || {}
    }, this.curTriggerIndex = 0, this.curTriggerInfo = {
      trigger: {}
    }, this.setTriggerInfo = (e, t = 0) => {
      const r = this.gp.triggers.getTrigger(e);
      r.trigger || (r.trigger = {}), this.curTriggerIndex = t, this.curTriggerInfo = r || {
        trigger: {}
      }
    }, this.curBonusIndex = 0, this.curBonus = {}, this.setBonus = (e, t = 0) => {
      this.curBonusIndex = t, this.curBonus = e || {}
    }, this.curSchedulerIndex = 0, this.curSchedulerInfo = {
      scheduler: {}
    }, this.curSchedulerDayInfo = {
      scheduler: {}
    }, this.setSchedulerInfo = (e, t = 0) => {
      const r = this.gp.schedulers.getScheduler(e);
      r.scheduler || (r.scheduler = {}), this.curSchedulerIndex = t, this.curSchedulerInfo = r || {
        scheduler: {}
      }, this.setSchedulerDayInfo(e, 1, t)
    }, this.setSchedulerDayInfo = (e, t, r = 0) => {
      const s = this.gp.schedulers.getSchedulerDay(e, t);
      s.scheduler || (s.scheduler = {}), this.curSchedulerDayInfo = s || {
        scheduler: {}
      }
    }, this.curEventIndex = 0, this.curEventInfo = {
      event: {}
    }, this.setEventInfo = (e, t = 0) => {
      const r = this.gp.events.getEvent(e);
      r.event || (r.event = {}), this.curEventIndex = t, this.curEventInfo = r || {
        event: {}
      }
    }, this.isLastConfirmSuccess = !1, this.lastIdOrTag = {
      id: 0,
      tag: ""
    }, this.lastPickedSchedulerDay = 0, this.lastPickedSchedulerTriggerIdOrTag = "", this.isPickedIdOrTag = e => {
      e = this.getIdOrTag(e);
      return 0 < e.id && e.id === this.lastIdOrTag.id || "" != e.tag && e.tag === this.lastIdOrTag.tag
    }, this.isPickedSchedulerDayAndTrigger = (e, t, r) => {
      e = !e || this.isPickedIdOrTag(e), t = !t || t === this.lastPickedSchedulerDay, r = !r || r === this.lastPickedSchedulerTriggerIdOrTag;
      return e && t && r
    }, this.curSegment = "";
    var t = this._getInitProperties();
    if (t && (this.projectId = Number(t[0] || 0), this.publicToken = t[1], this.showPreloaderOnStart = t[2], this.shouldWaitPlayerOnLoad = t[3], this.isEnabled = t[4], this.isAutoSendGameStart = t[5]), this.runtime.addLoadPromise(this.awaiters.gp.ready), this.shouldWaitPlayerOnLoad && this.runtime.addLoadPromise(this.awaiters.player.ready), !this.isEnabled) return this.onError("[GamePush] disabled"), this.awaiters.gp.done(), void this.awaiters.player.done();
    this.runtime.addEventListener("afterfirstlayoutstart", () => {
      const e = this.runtime;
      e && (e.GameScore = this.gp, e.GamePush = this.gp), this.isReady && this._trigger(this.conditions.OnReady), this.isPlayerReady && this._trigger(this.conditions.OnPlayerReady), this.isAutoSendGameStart && this.gp.gameStart()
    }), this.loadLib()
  }
  onError(e) {
    console.warn(e);
    e = () => Promise.resolve({});
    this.awaiters.gp.done(), this.awaiters.player.done(), this.gp = {
      on() {},
      changeLanguage: e,
      changeAvatarGenerator: e,
      loadOverlay: e,
      pause: e,
      resume: e,
      gameStart: e,
      gameplayStart: e,
      gameplayStop: e,
      isDev: !1,
      isPaused: !1,
      isGameplay: !1,
      isPortrait: !1,
      language: "en",
      avatarGenerator: "dicebear_retro",
      app: {
        on() {},
        title: "",
        description: "",
        image: "",
        url: "",
        canAddShortcut: !1,
        addShortcut: e
      },
      device: {
        on() {},
        type: ""
      },
      analytics: {
        on() {},
        hit() {},
        goal() {}
      },
      platform: {
        on() {},
        hasIntegratedAuth: !1,
        type: "NONE"
      },
      socials: {
        isSupportsNativeShare: !1,
        isSupportsNativePosts: !1,
        isSupportsNativeInvite: !1,
        share: e,
        post: e,
        invite: e,
        makeShareUrl: () => ""
      },
      leaderboard: {
        on() {},
        open: e,
        fetch: e,
        fetchScoped: e,
        fetchPlayerRating: e,
        fetchPlayerRatingScoped: e
      },
      achievements: {
        on() {},
        has() {},
        open: e,
        fetch: e,
        unlock: e,
        setProgress: e
      },
      gamesCollections: {
        on() {},
        open: e,
        fetch: e
      },
      documents: {
        on() {},
        open: e,
        fetch: e
      },
      variables: {
        list: [],
        on() {},
        fetch: e,
        get: e,
        has: e,
        type: e
      },
      images: {
        canUpload: !1,
        list: [],
        on() {},
        upload: e,
        uploadUrl: e,
        fetch: e,
        fetchMore: e,
        chooseFile: e,
        resize: e
      },
      files: {
        canUpload: !1,
        list: [],
        on() {},
        upload: e,
        uploadUrl: e,
        uploadContent: e,
        loadContent: e,
        fetch: e,
        fetchMore: e,
        chooseFile: e
      },
      payments: {
        isAvailable: !1,
        purchases: [],
        on() {},
        has() {},
        fetchProducts: e,
        purchase: e,
        consume: e
      },
      fullscreen: {
        isEnabled: !1,
        on() {},
        open() {},
        close() {},
        toggle() {}
      },
      ads: {
        isFullscreenAvailable: !1,
        isRewardedAvailable: !1,
        isPreloaderAvailable: !1,
        isStickyAvailable: !1,
        isAdblockEnabled: !1,
        on() {},
        showFullscreen: e,
        showRewardedVideo: e,
        showPreloader: e,
        showSticky: e,
        closeSticky: e,
        refreshSticky: e
      },
      player: {
        isStub: !0,
        isLoggedIn: !1,
        id: 0,
        name: "",
        avatar: "",
        stats: {},
        on() {},
        sync: e,
        load: e,
        login: e,
        logout: e,
        fetchFields: e,
        getField: e,
        getFieldName: e,
        getFieldVariantName: e,
        add: e,
        has: e,
        get: e,
        set: e,
        toggle: e,
        reset: e,
        remove: e,
        toJSON: () => ({}),
        fields: []
      },
      players: {
        on() {},
        fetch: e
      },
      rewards: {
        on() {},
        list: [],
        givenList: [],
        accept: e,
        give: e,
        has: e,
        hasAccepted: e,
        hasUnaccepted: e,
        getReward: e
      },
      triggers: {
        on() {},
        list: [],
        activatedList: [],
        claim: e,
        isActivated: e,
        isClaimed: e,
        getTrigger: e
      },
      schedulers: {
        on() {},
        list: [],
        activeList: [],
        getSchedulersTriggers: e,
        getScheduler: e,
        isRegistered: e,
        isTodayRewardClaimed: e,
        canClaimDay: e,
        canClaimDayAdditional: e,
        canClaimAllDay: e,
        getSchedulerDay: e,
        getSchedulerCurrentDay: e,
        claimDay: e,
        claimDayAdditional: e,
        claimAllDay: e,
        claimAllDays: e
      },
      events: {
        on() {},
        list: [],
        activeList: [],
        getEvent: e,
        has: e,
        join: e,
        isJoined: e
      },
      uniques: {
        on() {},
        list: [],
        register: e,
        check: e,
        delete: e,
        get: e
      },
      storage: {
        on() {},
        get: e,
        set: e,
        getGlobal: e,
        setGlobal: e
      },
      windows: {
        on() {},
        showConfirm: e
      },
      sounds: {
        isSFXMuted: !1,
        isMusicMuted: !1,
        isMuted: !1,
        on() {},
        mute: e,
        unmute: e,
        muteSFX: e,
        unmuteSFX: e,
        muteMusic: e,
        unmuteMusic: e
      }
    }, this.isReady = !0, this._trigger(this.conditions.OnReady), this.isPlayerReady = !0, this._trigger(this.conditions.OnPlayerReady)
  }
  async loadLib() {
    try {
      globalThis.onGPInit = e => e.ready.then(() => this.init(e)).catch(e => this.onError(e));
      for (var e = [SERVER_HOST, "./files/gs/sdk", "./files/gs/sdk", "."], t = 0; t < e.length; t++) try {
        await loadScript({
          src: `${e[t]}/sdk-bundle/gamepush.gd.js?projectId=${this.projectId}&publicToken=${this.publicToken}&callback=onGPInit`
        });
        break
      } catch (e) {}
    } catch (e) {
      console.error(e), this.onError(e)
    }
  }
  init(e) {
    this.gp = e;
    const t = this.runtime;
    t && (t.GameScore = this.gp, t.GamePush = this.gp), this.gp.player.on("ready", () => {
      this.isPlayerReady = !0, this.awaiters.player.done(), this._trigger(this.conditions.OnPlayerReady)
    }), this.gp.player.on("change", () => this._trigger(this.conditions.OnPlayerChange)), this.gp.player.on("sync", e => {
      this.handleResult(e), this._trigger(e ? this.conditions.OnPlayerSyncComplete : this.conditions.OnPlayerSyncError)
    }), this.gp.player.on("load", e => {
      this.handleResult(e), this._trigger(e ? this.conditions.OnPlayerLoadComplete : this.conditions.OnPlayerLoadError)
    }), this.gp.player.on("login", e => {
      this.handleResult(e), this._trigger(e ? this.conditions.OnPlayerLoginComplete : this.conditions.OnPlayerLoginError)
    }), this.gp.player.on("logout", e => {
      this.handleResult(e), this._trigger(e ? this.conditions.OnPlayerLogoutComplete : this.conditions.OnPlayerLogoutError)
    }), this.gp.player.on("fetchFields", e => {
      this.handleResult(e), this._trigger(e ? this.conditions.OnPlayerFetchFieldsComplete : this.conditions.OnPlayerFetchFieldsError)
    }), this.gp.player.on("field:increment", ({
      field: e
    }) => {
      this.currentPlayerFieldKey = e.key, this.currentPlayerFieldType = e.type, this.currentPlayerFieldName = e.name, this.currentPlayerFieldValue = this.gp.player.get(e.key), this._trigger(this.conditions.OnPlayerFieldIncrement)
    }), this.gp.player.on("field:maximum", ({
      field: e
    }) => {
      this.currentPlayerFieldKey = e.key, this.currentPlayerFieldType = e.type, this.currentPlayerFieldName = e.name, this.currentPlayerFieldValue = this.gp.player.get(e.key), this._trigger(this.conditions.OnPlayerFieldMaximum)
    }), this.gp.player.on("field:minimum", ({
      field: e
    }) => {
      this.currentPlayerFieldKey = e.key, this.currentPlayerFieldType = e.type, this.currentPlayerFieldName = e.name, this.currentPlayerFieldValue = this.gp.player.get(e.key), this._trigger(this.conditions.OnPlayerFieldMinimum)
    }), this.gp.uniques.on("register", ({
      tag: e,
      value: t
    }) => {
      this.handleResult(!0), this.currentUniquesTag = e, this.currentUniquesValue = t, this._trigger(this.conditions.OnUniquesRegister)
    }), this.gp.uniques.on("check", ({
      tag: e,
      value: t
    }) => {
      this.handleResult(!0), this.currentUniquesTag = e, this.currentUniquesValue = t, this._trigger(this.conditions.OnUniquesCheck)
    }), this.gp.uniques.on("delete", ({
      tag: e
    }) => {
      this.handleResult(!0), this.currentUniquesTag = e, this.currentUniquesValue = "", this._trigger(this.conditions.OnUniquesDelete)
    }), this.gp.uniques.on("error:register", e => {
      this.handleResult(!1, e), this._trigger(this.conditions.OnUniquesRegisterError)
    }), this.gp.uniques.on("error:check", e => {
      this.handleResult(!1, e), this._trigger(this.conditions.OnUniquesCheckError)
    }), this.gp.uniques.on("error:delete", e => {
      this.handleResult(!1, e), this._trigger(this.conditions.OnUniquesDeleteError)
    }), this.gp.storage.on("get", ({
      key: e,
      value: t
    }) => {
      this.handleResult(!0), this.storageCurKey = e, this.storageCurValue = t, this._trigger(this.conditions.OnStorageGet)
    }), this.gp.storage.on("set", ({
      key: e,
      value: t
    }) => {
      this.handleResult(!0), this.storageCurKey = e, this.storageCurValue = t, this._trigger(this.conditions.OnStorageSet)
    }), this.gp.storage.on("get:global", ({
      key: e,
      value: t
    }) => {
      this.handleResult(!0), this.storageCurKey = e, this.storageCurValue = t, this._trigger(this.conditions.OnStorageGetGlobal)
    }), this.gp.storage.on("set:global", ({
      key: e,
      value: t
    }) => {
      this.handleResult(!0), this.storageCurKey = e, this.storageCurValue = t, this._trigger(this.conditions.OnStorageSetGlobal)
    }), this.gp.leaderboard.on("open", () => this._trigger(this.conditions.OnLeaderboardOpen)), this.gp.leaderboard.on("close", () => this._trigger(this.conditions.OnLeaderboardClose)), this.gp.achievements.on("open", () => this._trigger(this.conditions.OnAchievementsOpen)), this.gp.achievements.on("close", () => this._trigger(this.conditions.OnAchievementsClose)), this.gp.achievements.on("unlock", e => {
      this.handleResult(!0), this.isUnlockAchievementSuccess = !0, this.unlockAchievementError = "", this.currentAchievement = e || {}, this._trigger(this.conditions.OnAchievementsUnlock), this._trigger(this.conditions.OnAchievementsAnyUnlock)
    }), this.gp.achievements.on("error:unlock", (e, t) => {
      this.lastIdOrTag = t.input, this.isUnlockAchievementSuccess = !1, this.unlockAchievementError = this.etos(e), this.handleResult(!1, e), this._trigger(this.conditions.OnAchievementsAnyUnlockError)
    }), this.gp.achievements.on("progress", e => {
      this.handleResult(!0), this.currentAchievement = e || {}, this._trigger(this.conditions.OnAchievementsSetProgress), this._trigger(this.conditions.OnAchievementsAnySetProgress)
    }), this.gp.achievements.on("error:progress", (e, t) => {
      this.lastIdOrTag = t.input, this.handleResult(!1, e), this._trigger(this.conditions.OnAchievementsAnySetProgressError)
    }), this.gp.payments.on("purchase", e => {
      this.isPurchaseProductSuccess = !0, this.purchaseProductError = "", this.handleResult(!0);
      e = e.product || {};
      this.purchasedProductId = e.id || 0, this.purchasedProductTag = e.tag || "", this._trigger(this.conditions.OnPaymentsPurchase), this._trigger(this.conditions.OnPaymentsAnyPurchase)
    }), this.gp.payments.on("error:purchase", (e, t) => {
      this.lastIdOrTag = t.input, this.isPurchaseProductSuccess = !1, this.purchasedProductId = t.input.id || 0, this.purchasedProductTag = t.input.tag || "", this.purchaseProductError = this.etos(e), this.handleResult(!1, e), this._trigger(this.conditions.OnPaymentsPurchaseError), this._trigger(this.conditions.OnPaymentsAnyPurchaseError)
    }), this.gp.payments.on("subscribe", e => {
      this.isSubscribeProductSuccess = !0, this.handleResult(!0);
      var t = e.product || {},
        e = e.purchase || {};
      this.currentPurchase = e, this.currentProduct = t, this.currentProductPurchases = 1, this.purchasedProductId = t.id || 0, this.purchasedProductTag = t.tag || "", this._trigger(this.conditions.OnPaymentsSubscribe), this._trigger(this.conditions.OnPaymentsAnySubscribe)
    }), this.gp.payments.on("error:subscribe", (e, t) => {
      this.lastIdOrTag = t.input, this.isSubscribeProductSuccess = !1, this.purchasedProductId = t.input.id || 0, this.purchasedProductTag = t.input.tag || "", this.isSubscribeProductSuccess = !1, this.handleResult(!1, e), this._trigger(this.conditions.OnPaymentsSubscribeError), this._trigger(this.conditions.OnPaymentsAnySubscribeError)
    }), this.gp.gamesCollections.on("open", () => this._trigger(this.conditions.OnGamesCollectionsOpen)), this.gp.gamesCollections.on("close", () => this._trigger(this.conditions.OnGamesCollectionsClose)), this.gp.documents.on("open", () => this._trigger(this.conditions.OnDocumentsOpen)), this.gp.documents.on("close", () => this._trigger(this.conditions.OnDocumentsClose)), this.gp.fullscreen.on("open", () => this._trigger(this.conditions.OnFullscreenOpen)), this.gp.fullscreen.on("close", () => this._trigger(this.conditions.OnFullscreenClose)), this.gp.fullscreen.on("change", () => this._trigger(this.conditions.OnFullscreenChange)), this.gp.ads.on("start", () => this._trigger(this.conditions.OnAdsStart)), this.gp.ads.on("close", e => {
      this.handleResult(e), this.isLastAdSuccess = e, this._trigger(this.conditions.OnAdsClose)
    }), this.gp.ads.on("fullscreen:start", () => this._trigger(this.conditions.OnAdsFullscreenStart)), this.gp.ads.on("fullscreen:close", () => this._trigger(this.conditions.OnAdsFullscreenClose)), this.gp.ads.on("preloader:start", () => this._trigger(this.conditions.OnAdsPreloaderStart)), this.gp.ads.on("preloader:close", () => this._trigger(this.conditions.OnAdsPreloaderClose)), this.gp.ads.on("rewarded:start", () => this._trigger(this.conditions.OnAdsRewardedStart)), this.gp.ads.on("rewarded:close", () => this._trigger(this.conditions.OnAdsRewardedClose)), this.gp.ads.on("rewarded:reward", () => this._trigger(this.conditions.OnAdsRewardedReward)), this.gp.ads.on("sticky:start", () => this._trigger(this.conditions.OnAdsStickyStart)), this.gp.ads.on("sticky:close", () => this._trigger(this.conditions.OnAdsStickyClose)), this.gp.ads.on("sticky:refresh", () => this._trigger(this.conditions.OnAdsStickyRefresh)), this.gp.ads.on("sticky:render", () => this._trigger(this.conditions.OnAdsStickyRender)), this.gp.socials.on("share", e => {
      this.handleResult(e), this.isLastShareSuccess = e, this._trigger(this.conditions.OnSocialsShare)
    }), this.gp.socials.on("post", e => {
      this.handleResult(e), this.isLastShareSuccess = e, this._trigger(this.conditions.OnSocialsPost)
    }), this.gp.socials.on("invite", e => {
      this.handleResult(e), this.isLastShareSuccess = e, this._trigger(this.conditions.OnSocialsInvite)
    }), this.gp.socials.on("joinCommunity", e => {
      this.handleResult(e), this.isLastCommunityJoinSuccess = e, this._trigger(this.conditions.OnSocialsJoinCommunity)
    }), this.gp.app.on("addShortcut", e => {
      this.handleResult(e), this.isLastAddShortcutSuccess = e, this._trigger(this.conditions.OnAppAddShortcut)
    }), this.gp.app.on("review", e => {
      this.handleResult(!0), this.appLastReviewRating = e.rating || 0, this._trigger(this.conditions.OnAppReview)
    }), this.gp.app.on("error:review", e => {
      this.handleResult(!1, e), this.appLastReviewRating = 0, this._trigger(this.conditions.OnAppReviewError)
    }), this.gp.on("change:language", () => this._trigger(this.conditions.OnChangeLanguage)), this.gp.on("change:avatarGenerator", () => this._trigger(this.conditions.OnChangeAvatarGenerator)), this.gp.on("change:orientation", () => this._trigger(this.conditions.OnChangeOrientation)), this.gp.on("overlay:ready", () => this._trigger(this.conditions.OnOverlayReady)), this.gp.on("pause", () => this._trigger(this.conditions.OnPause)), this.gp.on("resume", () => this._trigger(this.conditions.OnResume)), this.gp.on("gameplayStart", () => this._trigger(this.conditions.OnGameplayStart)), this.gp.on("gameplayStop", () => this._trigger(this.conditions.OnGameplayStop)), this.gp.channels.on("event", e => {
      this.curEvent = e
    }), this.gp.on("event:connect", () => {
      this._trigger(this.conditions.OnEventConnect)
    }), this.gp.rewards.on("accept", e => {
      this.setReward(e), this.handleResult(!0), this.lastIdOrTag = {
        id: e.reward.id,
        tag: e.reward.tag
      }, this._trigger(this.conditions.OnRewardsAccept)
    }), this.gp.rewards.on("error:accept", (e, t) => {
      this.handleResult(!1, e), this.lastIdOrTag = t.input, this._trigger(this.conditions.OnRewardsAcceptError)
    }), this.gp.rewards.on("give", e => {
      this.setReward(e), this.handleResult(!0), this.lastIdOrTag = {
        id: e.reward.id,
        tag: e.reward.tag
      }, this._trigger(this.conditions.OnRewardsGive)
    }), this.gp.rewards.on("error:give", (e, t) => {
      this.handleResult(!1, e), this.lastIdOrTag = t.input, this._trigger(this.conditions.OnRewardsGiveError)
    }), this.gp.triggers.on("activate", e => {
      this.setTriggerInfo(e.trigger.id), this.handleResult(!0), this.lastIdOrTag = {
        id: e.trigger.id,
        tag: e.trigger.tag
      }, this._trigger(this.conditions.OnTriggersActivate)
    }), this.gp.triggers.on("claim", e => {
      this.setTriggerInfo(e.trigger.id), this.handleResult(!0), this.lastIdOrTag = {
        id: e.trigger.id,
        tag: e.trigger.tag
      }, this._trigger(this.conditions.OnTriggersClaim)
    }), this.gp.triggers.on("error:claim", (e, t) => {
      this.handleResult(!1, e), this.lastIdOrTag = t.input, this._trigger(this.conditions.OnTriggersClaimError)
    }), this.gp.schedulers.on("register", e => {
      this.setSchedulerInfo(e.scheduler.id), this.handleResult(!0), this.lastIdOrTag = {
        id: e.scheduler.id,
        tag: e.scheduler.tag
      }, this._trigger(this.conditions.OnSchedulersRegister)
    }), this.gp.schedulers.on("error:register", (e, t) => {
      this.handleResult(!1, e), this.lastIdOrTag = t.input, this._trigger(this.conditions.OnSchedulersRegisterError)
    }), this.gp.schedulers.on("claimDay", e => {
      this.setSchedulerInfo(e.scheduler.id), this.setSchedulerDayInfo(e.scheduler.id, e.day), this.handleResult(!0), this.lastIdOrTag = {
        id: e.scheduler.id,
        tag: e.scheduler.tag
      }, this.lastPickedSchedulerDay = e.day, this._trigger(this.conditions.OnSchedulersClaimDay)
    }), this.gp.schedulers.on("error:claimDay", (e, t) => {
      this.handleResult(!1, e), this.lastIdOrTag = t.input, this.lastPickedSchedulerDay = t.input.day, this._trigger(this.conditions.OnSchedulersClaimDayError)
    }), this.gp.schedulers.on("claimDayAdditional", (e, t) => {
      this.setSchedulerInfo(e.scheduler.id), this.setSchedulerDayInfo(e.scheduler.id, e.day), this.setTriggerInfo(t.input.triggerIdOrTag), this.handleResult(!0), this.lastIdOrTag = {
        id: e.scheduler.id,
        tag: e.scheduler.tag
      }, this.lastPickedSchedulerDay = e.day, this.lastPickedSchedulerTriggerIdOrTag = t.input.triggerIdOrTag, this._trigger(this.conditions.OnSchedulersClaimDayAdditional)
    }), this.gp.schedulers.on("error:claimDayAdditional", (e, t) => {
      this.handleResult(!1, e), this.lastIdOrTag = t.input, this.lastPickedSchedulerDay = t.input.day, this.lastPickedSchedulerTriggerIdOrTag = t.input.triggerIdOrTag, this._trigger(this.conditions.OnSchedulersClaimDayAdditionalError)
    }), this.gp.schedulers.on("claimAllDay", e => {
      this.setSchedulerInfo(e.scheduler.id), this.setSchedulerDayInfo(e.scheduler.id, e.day), this.handleResult(!0), this.lastIdOrTag = {
        id: e.scheduler.id,
        tag: e.scheduler.tag
      }, this.lastPickedSchedulerDay = e.day, this._trigger(this.conditions.OnSchedulersClaimAllDay)
    }), this.gp.schedulers.on("error:claimAllDay", (e, t) => {
      this.handleResult(!1, e), this.lastIdOrTag = t.input, this.lastPickedSchedulerDay = t.input.day, this._trigger(this.conditions.OnSchedulersClaimAllDayError)
    }), this.gp.schedulers.on("claimAllDays", e => {
      this.setSchedulerInfo(e.scheduler.id), this.handleResult(!0), this.lastIdOrTag = {
        id: e.scheduler.id,
        tag: e.scheduler.tag
      }, this._trigger(this.conditions.OnSchedulersClaimAllDays)
    }), this.gp.schedulers.on("error:claimAllDays", (e, t) => {
      this.handleResult(!1, e), this.lastIdOrTag = t.input, this._trigger(this.conditions.OnSchedulersClaimAllDaysError)
    }), this.gp.events.on("join", e => {
      this.setEventInfo(e.event.id), this.handleResult(!0), this.lastIdOrTag = {
        id: e.event.id,
        tag: e.event.tag
      }, this._trigger(this.conditions.OnEventsJoin)
    }), this.gp.events.on("error:join", (e, t) => {
      this.handleResult(!1, e), this.lastIdOrTag = t.input, this._trigger(this.conditions.OnEventsJoinError)
    }), this.gp.segments.on("enter", e => {
      this.curSegment = e, this._trigger(this.conditions.OnSegmentsEnter)
    }), this.gp.segments.on("leave", e => {
      this.curSegment = e, this._trigger(this.conditions.OnSegmentsLeave)
    }), this.gp.windows.on("confirm:close", e => {
      this.handleResult(e), this.isLastConfirmSuccess = e, this._trigger(this.conditions.OnWindowsConfirmClose)
    }), this.gp.sounds.on("mute", () => this._trigger(this.conditions.OnMute)), this.gp.sounds.on("unmute", () => this._trigger(this.conditions.OnUnmute)), this.gp.sounds.on("mute:sfx", () => this._trigger(this.conditions.OnMuteSFX)), this.gp.sounds.on("unmute:sfx", () => this._trigger(this.conditions.OnUnmuteSFX)), this.gp.sounds.on("mute:music", () => this._trigger(this.conditions.OnMuteMusic)), this.gp.sounds.on("unmute:music", () => this._trigger(this.conditions.OnUnmuteMusic)), this.isReady = !0, this._trigger(this.conditions.OnReady), this.awaiters.gp.done(), this.showPreloaderOnStart && this.gp.ads.showPreloader()
  }
  Release() {
    super.Release()
  }
  SaveToJson() {
    return {
      leaderboard: this.leaderboard,
      leaderboardInfo: this.leaderboardInfo,
      leaderboardRecords: this.leaderboardRecords,
      leaderboardResult: this.leaderboardResult,
      currentLeaderboardIndex: this.currentLeaderboardIndex,
      currentLeaderboardPlayer: this.currentLeaderboardPlayer,
      lastLeaderboardTag: this.lastLeaderboardTag,
      lastLeaderboardVariant: this.lastLeaderboardVariant,
      lastLeaderboardPlayerRatingTag: this.lastLeaderboardPlayerRatingTag,
      leaderboardPlayerPosition: this.leaderboardPlayerPosition,
      currentPlayerFieldKey: this.currentPlayerFieldKey,
      currentPlayerFieldType: this.currentPlayerFieldType,
      currentPlayerFieldName: this.currentPlayerFieldName,
      currentPlayerFieldValue: this.currentPlayerFieldValue,
      currentUniquesTag: this.currentUniquesTag,
      currentUniquesValue: this.currentUniquesValue,
      storageCurKey: this.storageCurKey,
      storageCurValue: this.storageCurValue,
      lastRewardedTag: this.lastRewardedTag,
      currentPlayerFieldVariantValue: this.currentPlayerFieldVariantValue,
      currentPlayerFieldVariantName: this.currentPlayerFieldVariantName,
      currentPlayerFieldVariantIndex: this.currentPlayerFieldVariantIndex,
      isLastAdSuccess: this.isLastAdSuccess,
      isLastShareSuccess: this.isLastShareSuccess,
      isLastCommunityJoinSuccess: this.isLastCommunityJoinSuccess,
      isLastAddShortcutSuccess: this.isLastAddShortcutSuccess,
      isReady: this.isReady,
      isPlayerReady: this.isPlayerReady,
      achievements: this.achievements,
      achievementsGroups: this.achievementsGroups,
      playerAchievements: this.playerAchievements,
      currentAchievementIndex: this.currentAchievementIndex,
      currentAchievement: this.currentAchievement,
      currentAchievementsGroupIndex: this.currentAchievementsGroupIndex,
      currentAchievementsGroupId: this.currentAchievementsGroupId,
      currentAchievementsGroupTag: this.currentAchievementsGroupTag,
      currentAchievementsGroupName: this.currentAchievementsGroupName,
      currentAchievementsGroupDescription: this.currentAchievementsGroupDescription,
      currentPlayerAchievementIndex: this.currentPlayerAchievementIndex,
      currentPlayerAchievementId: this.currentPlayerAchievementId,
      currentPlayerAchievementUnlockDate: this.currentPlayerAchievementUnlockDate,
      isUnlockAchievementSuccess: this.isUnlockAchievementSuccess,
      unlockAchievementError: this.unlockAchievementError,
      products: this.products,
      playerPurchases: this.playerPurchases,
      currentProductIndex: this.currentProductIndex,
      currentProduct: this.currentProduct,
      currentProductPurchases: this.currentProductPurchases,
      currentPurchaseIndex: this.currentPurchaseIndex,
      currentPurchase: this.currentPurchase,
      lastPlayersTag: this.lastPlayersTag,
      currentPlayersIndex: this.currentPlayersIndex,
      currentPlayersPlayer: this.currentPlayersPlayer,
      isSubscribeProductSuccess: this.isSubscribeProductSuccess,
      isUnsubscribeProductSuccess: this.isUnsubscribeProductSuccess,
      isPurchaseProductSuccess: this.isPurchaseProductSuccess,
      purchaseProductError: this.purchaseProductError,
      purchasedProductId: this.purchasedProductId,
      purchasedProductTag: this.purchasedProductTag,
      isConsumeProductSuccess: this.isConsumeProductSuccess,
      consumeProductError: this.consumeProductError,
      consumedProductId: this.consumedProductId,
      consumedProductTag: this.consumedProductTag,
      gamesCollection: this.gamesCollection,
      currentGameIndex: this.currentGameIndex,
      currentGameId: this.currentGameId,
      currentGameName: this.currentGameName,
      currentGameDescription: this.currentGameDescription,
      currentGameIcon: this.currentGameIcon,
      currentGameUrl: this.currentGameUrl,
      gamesCollectionFetchError: this.gamesCollectionFetchError,
      lastGamesCollectionIdOrTag: this.lastGamesCollectionIdOrTag,
      document: this.document,
      lastDocumentType: this.lastDocumentType,
      documentFetchError: this.documentFetchError,
      lastError: this.lastError,
      isLastActionSuccess: this.isLastActionSuccess,
      images: this.images,
      canLoadMoreImages: this.canLoadMoreImages,
      currentImage: this.currentImage,
      lastImageTempUrl: this.lastImageTempUrl,
      currentImageIndex: this.currentImageIndex,
      currentImageTagIndex: this.currentImageTagIndex,
      currentImageTag: this.currentImageTag,
      files: this.files,
      lastFileContent: this.lastFileContent,
      canLoadMoreFiles: this.canLoadMoreFiles,
      currentFile: this.currentFile,
      lastFileTempUrl: this.lastFileTempUrl,
      currentFileIndex: this.currentFileIndex,
      currentFileTagIndex: this.currentFileTagIndex,
      currentFileTag: this.currentFileTag,
      curRewardIndex: this.curRewardIndex,
      curReward: this.curReward,
      curPlayerReward: this.curPlayerReward,
      curTriggerIndex: this.curTriggerIndex,
      curTriggerInfo: this.curTriggerInfo,
      curBonusIndex: this.curBonusIndex,
      curBonus: this.curBonus,
      curSchedulerIndex: this.curSchedulerIndex,
      curSchedulerInfo: this.curSchedulerInfo,
      curSchedulerDayInfo: this.curSchedulerDayInfo,
      curEventIndex: this.curEventIndex,
      curEventInfo: this.curEventInfo,
      currentVariableIndex: this.currentVariableIndex,
      currentVariable: this.currentVariable,
      curSegment: this.curSegment,
      isLastConfirmSuccess: this.isLastConfirmSuccess
    }
  }
  LoadFromJson(e) {
    this.leaderboard = e.leaderboard, this.leaderboardInfo = e.leaderboardInfo || {}, this.leaderboardRecords = e.leaderboardRecords || {}, this.leaderboardResult = e.leaderboardResult || {
      abovePlayers: [],
      belowPlayers: [],
      topPlayers: []
    }, this.currentLeaderboardIndex = e.currentLeaderboardIndex, this.currentLeaderboardPlayer = e.currentLeaderboardPlayer || {}, this.lastLeaderboardTag = e.lastLeaderboardTag, this.lastLeaderboardVariant = e.lastLeaderboardVariant, this.lastLeaderboardPlayerRatingTag = e.lastLeaderboardPlayerRatingTag, this.leaderboardPlayerPosition = e.leaderboardPlayerPosition || 0, this.currentPlayerFieldKey = e.currentPlayerFieldKey, this.currentPlayerFieldType = e.currentPlayerFieldType, this.currentPlayerFieldName = e.currentPlayerFieldName, this.currentPlayerFieldValue = e.currentPlayerFieldValue, this.currentUniquesTag = e.currentUniquesTag, this.currentUniquesValue = e.currentUniquesValue, this.storageCurKey = e.storageCurKey, this.storageCurValue = e.storageCurValue, this.lastRewardedTag = e.lastRewardedTag, this.currentPlayerFieldVariantValue = e.currentPlayerFieldVariantValue, this.currentPlayerFieldVariantName = e.currentPlayerFieldVariantName, this.currentPlayerFieldVariantIndex = e.currentPlayerFieldVariantIndex, this.isLastAdSuccess = e.isLastAdSuccess, this.isLastShareSuccess = e.isLastShareSuccess, this.isLastCommunityJoinSuccess = e.isLastCommunityJoinSuccess, this.isLastAddShortcutSuccess = e.isLastAddShortcutSuccess, this.isReady = e.isReady, this.isPlayerReady = e.isPlayerReady, this.achievements = e.achievements || [], this.achievementsGroups = e.achievementsGroups || [], this.playerAchievements = e.playerAchievements || [], this.currentAchievementIndex = e.currentAchievementIndex || 0, this.currentAchievement = e.currentAchievement || {}, this.currentAchievementsGroupIndex = e.currentAchievementsGroupIndex || 0, this.currentAchievementsGroupId = e.currentAchievementsGroupId || 0, this.currentAchievementsGroupTag = e.currentAchievementsGroupTag || "", this.currentAchievementsGroupName = e.currentAchievementsGroupName || "", this.currentAchievementsGroupDescription = e.currentAchievementsGroupDescription || "", this.currentPlayerAchievementIndex = e.currentPlayerAchievementIndex || 0, this.currentPlayerAchievementId = e.currentPlayerAchievementId || 0, this.currentPlayerAchievementUnlockDate = e.currentPlayerAchievementUnlockDate || "", this.isUnlockAchievementSuccess = e.isUnlockAchievementSuccess || !1, this.unlockAchievementError = e.unlockAchievementError || "", this.products = e.products || [], this.playerPurchases = e.playerPurchases || [], this.currentProductIndex = e.currentProductIndex || 0, this.currentProduct = e.currentProduct || {
      id: 0,
      tag: "",
      name: "",
      description: "",
      icon: "",
      iconSmall: "",
      price: 0,
      currency: "",
      currencySymbol: ""
    }, this.currentProductPurchases = e.currentProductPurchases || 0, this.currentPurchaseIndex = e.currentPurchaseIndex || 0, this.currentPurchase = e.currentPurchase || {
      id: 0,
      tag: "",
      createdAt: ""
    }, this.lastPlayersTag = e.lastPlayersTag, this.currentPlayersIndex = e.currenPlayersIndex || 0, this.currentPlayersPlayer = e.currentPlayersPlayer || {
      state: {},
      achievements: [],
      purchases: []
    }, this.isSubscribeProductSuccess = e.isSubscribeProductSuccess || !1, this.isUnsubscribeProductSuccess = e.isUnsubscribeProductSuccess || !1, this.isPurchaseProductSuccess = e.isPurchaseProductSuccess || !1, this.purchaseProductError = e.purchaseProductError || "", this.purchasedProductId = e.purchasedProductId || 0, this.purchasedProductTag = e.purchasedProductTag || "", this.isConsumeProductSuccess = e.isConsumeProductSuccess || !1, this.consumeProductError = e.consumeProductError || "", this.consumedProductId = e.consumedProductId || 0, this.consumedProductTag = e.consumedProductTag || "", this.gamesCollection = e.gamesCollection || {
      id: 0,
      tag: "",
      name: "",
      description: "",
      games: []
    }, this.currentGameIndex = e.currentGameIndex || 0, this.currentGameId = e.currentGameId || 0, this.currentGameName = e.currentGameName || "", this.currentGameDescription = e.currentGameDescription || "", this.currentGameIcon = e.currentGameIcon || "", this.currentGameUrl = e.currentGameUrl || "", this.gamesCollectionFetchError = e.gamesCollectionFetchError || "", this.lastGamesCollectionIdOrTag = e.lastGamesCollectionIdOrTag || "", this.document = e.document || {
      type: "",
      content: ""
    }, this.lastDocumentType = e.lastDocumentType || "", this.documentFetchError = e.documentFetchError || "", this.lastError = e.lastError || "", this.isLastActionSuccess = e.isLastActionSuccess || !1, this.images = e.images || [], this.canLoadMoreImages = e.canLoadMoreImages || !1, this.currentImageIndex = e.currentImageIndex || 0, this.currentImageTagIndex = e.currentImageTagIndex || 0, this.currentImageTag = e.currentImageTag || "", this.currentImage = e.currentImage || {
      id: "",
      playerId: 0,
      width: 0,
      height: 0,
      src: "",
      tags: []
    }, this.files = e.files || [], this.lastFileContent = e.lastFileContent || "", this.canLoadMoreFiles = e.canLoadMoreFiles || !1, this.currentFileIndex = e.currentFileIndex || 0, this.currentFileTagIndex = e.currentFileTagIndex || 0, this.currentFileTag = e.currentFileTag || "", this.currentFile = e.currentFile || {
      id: "",
      playerId: 0,
      name: "",
      size: 0,
      src: "",
      tags: []
    }, this.currentVariableIndex = e.currentVariableIndex || 0, this.currentVariable = e.currentVariable || {
      key: "",
      type: "",
      value: ""
    }, this.curRewardIndex = e.curRewardIndex || 0, this.curReward = e.curReward || {}, this.curPlayerReward = e.curPlayerReward || {}, this.curTriggerIndex = e.curTriggerIndex || 0, this.curTriggerInfo = e.curTriggerInfo || {
      trigger: {}
    }, this.curSchedulerIndex = e.curSchedulerIndex || 0, this.curSchedulerInfo = e.curSchedulerInfo || {
      scheduler: {}
    }, this.curSchedulerDayInfo = e.curSchedulerDayInfo || {
      scheduler: {}
    }, this.curEventIndex = e.curEventIndex || 0, this.curEventInfo = e.curEventInfo || {
      event: {}
    }, this.curBonusIndex = e.curBonusIndex || 0, this.curBonus = e.curBonus || {}, this.curSegment = e.curSegment || "", this.isLastConfirmSuccess = e.isLastConfirmSuccess || !1
  }
  _getDebuggerProperties() {
    return this.isPlayerReady ? [{
      title: "GS - Base",
      properties: [{
        name: "Language",
        value: this.gp.language
      }, {
        name: "Avatar Generator",
        value: this.gp.avatarGenerator
      }, {
        name: "Platform",
        value: this.gp.platform.type
      }, {
        name: "Last Error",
        value: this.lastError
      }, {
        name: "Is Last Action Success",
        value: this.isLastActionSuccess
      }, {
        name: "Is Mobile",
        value: this.gp.isMobile
      }, {
        name: "Is Dev",
        value: this.gp.isDev
      }, {
        name: "Is Paused",
        value: this.gp.isPaused
      }, {
        name: "Is Gameplay",
        value: this.gp.isGameplay
      }, {
        name: "Is Allowed Origin",
        value: this.gp.isAllowedOrigin
      }]
    }, {
      title: "GS - Ads",
      properties: [{
        name: "Last Ad Success",
        value: this.isLastAdSuccess
      }, {
        name: "Adblock Enabled",
        value: this.gp.ads.isAdblockEnabled
      }]
    }, {
      title: "GS - Leaderboards",
      properties: [{
        name: "Player Position",
        value: this.leaderboardPlayerPosition
      }]
    }, {
      title: "GS - Player",
      properties: [{
        name: "ID",
        value: this.gp.player.id
      }, {
        name: "Logged In By Platform",
        value: this.gp.player.isLoggedInByPlatform
      }, {
        name: "Is Stub",
        value: this.gp.player.isStub
      }, ...this.gp.player.fields.map(t => ({
        name: this.gp.player.getFieldName(t.key),
        value: this.gp.player.get(t.key),
        onedit: e => this.CallAction(this.actions.PlayerSet, t.key, e)
      }))]
    }, {
      title: "GS - Achievements - Current",
      properties: [{
        name: "Index",
        value: this.currentAchievementIndex
      }, {
        name: "ID",
        value: this.currentAchievement.id
      }, {
        name: "Tag",
        value: this.currentAchievement.tag
      }, {
        name: "Name",
        value: this.currentAchievement.name
      }, {
        name: "Description",
        value: this.currentAchievement.description
      }, {
        name: "Rare",
        value: this.currentAchievement.rare
      }, {
        name: "Unlocked",
        value: this.currentAchievement.unlocked
      }, {
        name: "Icon",
        value: this.currentAchievement.icon
      }, {
        name: "Icon Small",
        value: this.currentAchievement.iconSmall
      }, {
        name: "Locked Icon",
        value: this.currentAchievement.lockedIcon
      }, {
        name: "Locked Icon Small",
        value: this.currentAchievement.lockedIconSmall
      }, {
        name: "Progress",
        value: this.currentAchievement.progress
      }, {
        name: "Max Progress",
        value: this.currentAchievement.maxProgress
      }, {
        name: "Progress Step",
        value: this.currentAchievement.progressStep
      }, {
        name: "Locked Visible",
        value: this.currentAchievement.lockedVisible
      }, {
        name: "Locked Description Visible",
        value: this.currentAchievement.lockedDescriptionVisible
      }]
    }, {
      title: "GS - Achievements Groups Loop",
      properties: [{
        name: "Current Achievements Group Index",
        value: this.currentAchievementsGroupIndex
      }, {
        name: "Current Achievements Group ID",
        value: this.currentAchievementsGroupId
      }, {
        name: "Current Achievements Group Tag",
        value: this.currentAchievementsGroupTag
      }, {
        name: "Current Achievements Group Name",
        value: this.currentAchievementsGroupName
      }, {
        name: "Current Achievements Group Description",
        value: this.currentAchievementsGroupDescription
      }]
    }, {
      title: "GS - Player Achievements Loop",
      properties: [{
        name: "Current Player Achievement Index",
        value: this.currentPlayerAchievementIndex
      }, {
        name: "Current Player Achievement ID",
        value: this.currentPlayerAchievementId
      }, {
        name: "Current Player Achievement Unlock Date",
        value: this.currentPlayerAchievementUnlockDate
      }]
    }, {
      title: "GS - Products Loop",
      properties: [{
        name: "Current Product Index",
        value: this.currentProductIndex
      }, {
        name: "Current Product ID",
        value: this.currentProduct.id
      }, {
        name: "Current Product Tag",
        value: this.currentProduct.tag
      }, {
        name: "Current Product Name",
        value: this.currentProduct.name
      }, {
        name: "Current Product Description",
        value: this.currentProduct.description
      }, {
        name: "Current Product Icon",
        value: this.currentProduct.icon
      }, {
        name: "Current Product Icon Small",
        value: this.currentProduct.iconSmall
      }, {
        name: "Current Product Icon",
        value: this.currentProduct.icon
      }, {
        name: "Current Product Price",
        value: this.currentProduct.price
      }, {
        name: "Current Product Currency",
        value: this.currentProduct.currency
      }, {
        name: "Current Product CurrencySymbol",
        value: this.currentProduct.currencySymbol
      }, {
        name: "Current Product Purchases",
        value: this.currentProductPurchases
      }]
    }, {
      title: "GS - Purchased Product",
      properties: [{
        name: "Is purchase successful",
        value: this.isPurchaseProductSuccess
      }, {
        name: "Purchase error",
        value: this.purchaseProductError
      }, {
        name: "Purchased Product ID",
        value: this.purchasedProductId
      }, {
        name: "Purchased Product Tag",
        value: this.purchasedProductTag
      }]
    }, {
      title: "GS - Consumed Product",
      properties: [{
        name: "Is consume successful",
        value: this.isConsumeProductSuccess
      }, {
        name: "Consume error",
        value: this.consumeProductError
      }, {
        name: "Consumed Product ID",
        value: this.consumedProductId
      }, {
        name: "Consumed Product Tag",
        value: this.consumedProductTag
      }]
    }, {
      title: "GS - Last Games Collection",
      properties: [{
        name: "Collection ID",
        value: this.gamesCollection.id
      }, {
        name: "Collection Tag",
        value: this.gamesCollection.tag
      }, {
        name: "Collection Name",
        value: this.gamesCollection.name
      }, {
        name: "Collection Description",
        value: this.gamesCollection.description
      }, {
        name: "Fetch Error",
        value: this.gamesCollectionFetchError
      }]
    }, {
      title: "GS - Games in Collection",
      properties: [{
        name: "Current Game Index",
        value: this.currentGameIndex
      }, {
        name: "Current Game ID",
        value: this.currentGameId
      }, {
        name: "Current Game Name",
        value: this.currentGameName
      }, {
        name: "Current Game Description",
        value: this.currentGameDescription
      }, {
        name: "Current Game Icon",
        value: this.currentGameIcon
      }, {
        name: "Current Game Url",
        value: this.currentGameUrl
      }]
    }, {
      title: "GS - Documents",
      properties: [{
        name: "Document Type",
        value: this.document.type
      }, {
        name: "Document Content",
        value: this.document.content
      }, {
        name: "Fetch Error",
        value: this.documentFetchError
      }]
    }, {
      title: "GS - Sounds",
      properties: [{
        name: "Is SFX Muted",
        value: this.gp.sounds.isSFXMuted
      }, {
        name: "Is Music Muted",
        value: this.gp.sounds.isMusicMuted
      }, {
        name: "Is Muted",
        value: this.gp.sounds.isMuted
      }]
    }] : []
  }
};