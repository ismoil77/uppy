import type { Locale } from '@uppy/core/utils'

const tg_TJ: Locale<0 | 1> = {
  strings: {},
  pluralize(n) {
    if (n === 1) {
      return 0
    }
    return 1
  },
}

tg_TJ.strings = {
  actionFailed: 'Амал иҷро нашуд',
  addBulkFilesFailed: {
    '0': 'Бо сабаби хатои дохилӣ %{smart_count} файл илова нашуд',
    '1': 'Бо сабаби хатоҳои дохилӣ %{smart_count} файл илова нашуд',
  },
  addedNumFiles: '%{numFiles} файл илова шуд',
  addingMoreFiles: 'Илова кардани файлҳои дигар',
  additionalRestrictionsFailed: '%{count} маҳдудияти иловагӣ риоя нашуд',
  addMore: 'Боз илова кардан',
  addMoreFiles: 'Боз файл илова кардан',
  aggregateExceedsSize:
    'Шумо %{size} файл интихоб кардед, аммо андозаи ҳадди аксари иҷозатдодашуда %{sizeAllowed} аст',
  allFilesFromFolderNamed: 'Ҳамаи файлҳо аз ҷузвдони %{name}',
  allowAccessDescription:
    'Барои гирифтани акс ё сабти видео бо камераи худ, лутфан ба ин сомона иҷозати дастрасӣ ба камераро диҳед.',
  allowAccessTitle: 'Лутфан ба камераи худ иҷозати дастрасӣ диҳед',
  allowAudioAccessDescription:
    'Барои сабти аудио, лутфан ба ин сомона иҷозати дастрасӣ ба микрофонро диҳед.',
  allowAudioAccessTitle: 'Лутфан ба микрофони худ иҷозати дастрасӣ диҳед',
  aspectRatioLandscape: 'Буридан ба шакли уфуқӣ (16:9)',
  aspectRatioPortrait: 'Буридан ба шакли амудӣ (9:16)',
  aspectRatioSquare: 'Буридан ба шакли мураббаъ',
  authAborted: 'Воридшавӣ қатъ карда шуд',
  authenticate: 'Пайваст шудан',
  authenticateWith: 'Пайваст шудан ба %{pluginName}',
  authenticateWithTitle:
    'Барои интихоби файлҳо лутфан ба %{pluginName} ворид шавед',
  back: 'Бозгашт',
  browse: 'интихоб кунед',
  browseFiles: 'файлҳоро интихоб кунед',
  browseFolders: 'ҷузвдонҳоро интихоб кунед',
  bucketChanged:
    'Ҷаласаи анбор акнун bucket-и дигарро нишон медиҳад, бинобар ин ҷузвдон аз нав бор карда шуд ва интихоб пок карда шуд. Файлҳоро аз нав интихоб кунед.',
  cancel: 'Бекор кардан',
  cancelAllUploads: 'Бекор кардани ҳамаи боргузориҳо',
  cancelUpload: 'Бекор кардани боргузорӣ',
  cancelUploadWithFilename: 'Бекор кардани боргузории %{file}',
  closeModal: 'Пӯшидани равзана',
  companionError: 'Пайвастшавӣ бо Companion ноком шуд',
  companionUnauthorizeHint:
    'Барои бекор кардани иҷозат ба ҳисоби %{provider}-и худ, лутфан ба %{url} гузаред',
  complete: 'Тайёр',
  compressedX: 'Бо фишурдани тасвирҳо %{size} сарфа шуд',
  compressingImages: 'Тасвирҳо фишурда шуда истодаанд...',
  connectedToInternet: 'Ба Интернет пайваст шуд',
  copiedSmartCdnUrl: 'URL-и Smart CDN ба ҳофизаи муваққатӣ нусха бардошта шуд',
  copyLink: 'Нусха бардоштани пайванд',
  copyLinkToClipboardFallback: 'Аз URL-и зерин нусха бардоред',
  copyLinkToClipboardSuccess:
    'Пайванд ба ҳофизаи муваққатӣ нусха бардошта шуд.',
  copySmartCdnUrl: 'Нусха бардоштани URL-и Smart CDN',
  create: 'Сохтан',
  creatingAssembly: 'Боргузорӣ омода шуда истодааст...',
  creatingAssemblyFailed: 'Transloadit: Assembly сохта нашуд',
  dashboardTitle: 'Лавҳаи Uppy',
  dashboardWindowTitle:
    'Равзанаи лавҳаи Uppy (барои пӯшидан Escape-ро пахш кунед)',
  dataUploadedOfTotal: '%{complete} аз %{total}',
  dataUploadedOfUnknown: '%{complete} аз номаълум',
  deleteConfirm: '"%{name}" нест карда шавад?',
  deleteFolderHint: 'Ҷузвдон ва ҳама чизи дохили он нест карда мешавад.',
  deleteItem: 'Нест кардан',
  deleteSelectedConfirm: {
    '0': '%{smart_count} унсур нест карда шавад?',
    '1': '%{smart_count} унсур нест карда шавад?',
  },
  deleteSelectedFolderHint: {
    '0': 'Ҷузвдони интихобшуда ва ҳама чизи дохили он нест карда мешавад.',
    '1': 'Ҷузвдонҳои интихобшуда ва ҳама чизи дохили онҳо нест карда мешаванд.',
  },
  deletingFiles: 'Нест кардани %{done} аз %{total} файл…',
  deletingItemFiles:
    'Нест кардани унсури %{item} аз %{items}: %{done} аз %{total} файл…',
  deletingItems: 'Нест кардани %{done} аз %{total} унсур…',
  dialogConfirm: 'ХУБ',
  discardMediaFile: 'Нест кардани медиа',
  discardRecordedFile: 'Нест кардани файли сабтшуда',
  done: 'Тайёр',
  download: 'Боргирӣ кардан',
  downloadFailed: 'Ин файл боргирӣ нашуд',
  dropHereOr: 'Ба ин ҷо кашида гузоред ё %{browse}',
  dropHint: 'Файлҳои худро ба ин ҷо кашида гузоред',
  dropPasteBoth:
    'Файлҳоро ба ин ҷо кашида гузоред, %{browseFiles} ё %{browseFolders}',
  dropPasteFiles: 'Файлҳоро ба ин ҷо кашида гузоред ё %{browseFiles}',
  dropPasteFolders: 'Файлҳоро ба ин ҷо кашида гузоред ё %{browseFolders}',
  dropPasteImportBoth:
    'Файлҳоро ба ин ҷо кашида гузоред, %{browseFiles}, %{browseFolders} ё ворид кунед аз:',
  dropPasteImportFiles:
    'Файлҳоро ба ин ҷо кашида гузоред, %{browseFiles} ё ворид кунед аз:',
  dropPasteImportFolders:
    'Файлҳоро ба ин ҷо кашида гузоред, %{browseFolders} ё ворид кунед аз:',
  editFile: 'Таҳрир кардани файл',
  editFileWithFilename: 'Таҳрир кардани файли %{file}',
  editImage: 'Таҳрир кардани тасвир',
  editing: '%{file} таҳрир шуда истодааст',
  emptyFolderAdded: 'Аз ҷузвдони холӣ ягон файл илова нашуд',
  encoding: 'Коркард шуда истодааст...',
  enterCorrectUrl:
    'URL-и нодуруст: лутфан боварӣ ҳосил кунед, ки пайванди мустақим ба файлро ворид мекунед',
  enterTextToSearch: 'Барои ҷустуҷӯи тасвирҳо матн ворид кунед',
  enterUrlToImport: 'Барои ворид кардани файл URL-ро нависед',
  error: 'Хато',
  exceedsSize:
    '%{file} аз андозаи ҳадди аксари иҷозатдодашудаи %{size} калонтар аст',
  failedToAddFiles: 'Файлҳо илова нашуданд',
  failedToFetch:
    'Companion ин URL-ро гирифта натавонист, лутфан дуруст будани онро санҷед',
  failedToUpload: '%{file} боргузорӣ нашуд',
  filesUploadedOfTotal: {
    '0': '%{complete} аз %{smart_count} файл боргузорӣ шуд',
    '1': '%{complete} аз %{smart_count} файл боргузорӣ шуд',
  },
  filter: 'Филтр',
  finishEditingFile: 'Анҷом додани таҳрири файл',
  flipHorizontal: 'Инъикоси уфуқӣ',
  folderAdded: {
    '0': '%{smart_count} файл аз %{folder} илова шуд',
    '1': '%{smart_count} файл аз %{folder} илова шуд',
  },
  folderAlreadyAdded: 'Ҷузвдони "%{folder}" аллакай илова шудааст',
  folderCreated: 'Ҷузвдони "%{name}" сохта шуд',
  generateImage: 'Эҷод кардани тасвир',
  generateImagePlaceholder:
    'Ғуруби ороми офтоб бар болои кӯли кӯҳӣ, бо дарахтони санавбар, ки дар об инъикос меёбанд',
  generating1: 'Зеҳни сунъӣ фикр карда истодааст...',
  generating2: 'Пикселҳо коркард шуда истодаанд...',
  generating3: 'Тасвирҳо пайдо шуда истодаанд...',
  generating4: 'Зеҳни сунъӣ кор карда истодааст...',
  generating5: 'Мӯъҷиза эҷод шуда истодааст...',
  generatingThumbnails: 'Тасвирчаҳо сохта шуда истодаанд...',
  googleDrivePickerFailed:
    'Google Drive бор нашуд. Агар ин такрор шавад, барои ин сомона ба кукиҳои тарафи сеюм иҷозат диҳед.',
  import: 'Ворид кардан',
  importFiles: 'Ворид кардани файлҳо аз:',
  importFrom: 'Ворид кардан аз %{name}',
  inferiorSize: 'Ин файл аз андозаи иҷозатдодашудаи %{size} хурдтар аст',
  itemActionsNamed: 'Амалҳо барои %{name}',
  itemDeleted: '"%{name}" нест карда шуд',
  itemMoved: 'Ба "%{path}" интиқол дода шуд',
  itemRenamed: 'Ном ба "%{name}" иваз карда шуд',
  itemsDeleted: {
    '0': '%{smart_count} унсур нест карда шуд',
    '1': '%{smart_count} унсур нест карда шуд',
  },
  itemsMoved: {
    '0': '%{smart_count} унсур интиқол дода шуд',
    '1': '%{smart_count} унсур интиқол дода шуд',
  },
  loadedXFiles: '%{numFiles} файл бор карда шуд',
  loading: 'Бор шуда истодааст...',
  logIn: 'Ворид шудан',
  logOut: 'Баромадан',
  micDisabled: 'Дастрасӣ ба микрофон аз ҷониби корбар манъ карда шуд',
  missingRequiredMetaField: 'Майдонҳои ҳатмии метамаълумот пур карда нашудаанд',
  missingRequiredMetaFieldOnFile:
    'Дар %{fileName} майдонҳои ҳатмии метамаълумот пур карда нашудаанд',
  missingRequiredMetaFields: {
    '0': 'Майдони ҳатмии метамаълумот пур карда нашудааст: %{fields}.',
    '1': 'Майдонҳои ҳатмии метамаълумот пур карда нашудаанд: %{fields}.',
  },
  move: 'Интиқол додан',
  moveSelected: 'Интиқол додан…',
  moveSelectedPrompt:
    'Ҷузвдони таъинот нисбат ба ҷузвдони решагӣ (барои ҷузвдони решагӣ холӣ гузоред):',
  moveSelectedTitle: {
    '0': 'Интиқол додани %{smart_count} унсур',
    '1': 'Интиқол додани %{smart_count} унсур',
  },
  movingFiles: 'Интиқол додани %{done} аз %{total} файл…',
  movingItemFiles:
    'Интиқол додани унсури %{item} аз %{items}: %{done} аз %{total} файл…',
  movingItems: 'Интиқол додани %{done} аз %{total} унсур…',
  myDevice: 'Дастгоҳи ман',
  newFolder: 'Ҷузвдони нав…',
  newFolderPrompt: 'Номи ҷузвдони нав:',
  newFolderTitle: 'Ҷузвдони нав',
  noAudioDescription:
    'Барои сабти аудио лутфан микрофон ё дастгоҳи дигари вуруди аудиоро пайваст кунед',
  noAudioTitle: 'Микрофон дастрас нест',
  noCameraDescription:
    'Барои гирифтани акс ё сабти видео лутфан камераро пайваст кунед',
  noCameraTitle: 'Камера дастрас нест',
  noDuplicates:
    "Файли такрории '%{fileName}' илова карда намешавад, он аллакай мавҷуд аст",
  noFilesFound: 'Дар ин ҷо ягон файл ё ҷузвдон нест',
  noInternetConnection: 'Пайвасти Интернет нест',
  noMoreFilesAllowed: 'Дигар файл илова карда намешавад',
  noSearchResults: 'Мутаассифона, барои ин ҷустуҷӯ ягон натиҷа нест',
  openFolderNamed: 'Кушодани ҷузвдони %{name}',
  pause: 'Таваққуф кардан',
  pauseAllUploads: 'Таваққуф кардани ҳамаи боргузориҳо',
  paused: 'Таваққуф шуд',
  pauseUpload: 'Таваққуф кардани боргузорӣ',
  pauseUploadWithFilename: 'Таваққуф кардани боргузории %{file}',
  pickFiles: 'Интихоби файлҳо',
  pickPhotos: 'Интихоби аксҳо',
  pleaseWait: 'Лутфан интизор шавед',
  pluginNameAudio: 'Аудио',
  pluginNameBox: 'Box',
  pluginNameCamera: 'Камера',
  pluginNameDropbox: 'Dropbox',
  pluginNameFacebook: 'Facebook',
  pluginNameGoogleDrive: 'Google Drive',
  pluginNameGoogleDrivePicker: 'Google Drive',
  pluginNameGooglePhotosPicker: 'Google Photos',
  pluginNameOneDrive: 'OneDrive',
  pluginNameS3: 'S3',
  pluginNameScreenCapture: 'Сабти экран',
  pluginNameTransloaditStorage: 'Transloadit Storage',
  pluginNameUnsplash: 'Unsplash',
  pluginNameUrl: 'Пайванд',
  pluginNameWebdav: 'WebDAV',
  pluginNameZoom: 'Zoom',
  pluginWebdavInputLabel:
    'URL-и WebDAV барои файл (масалан, аз ownCloud ё Nextcloud)',
  poweredBy: 'Дар асоси %{uppy}',
  processingXFiles: {
    '0': 'Коркарди %{smart_count} файл',
    '1': 'Коркарди %{smart_count} файл',
  },
  recording: 'Сабт шуда истодааст',
  recordingLength: 'Давомнокии сабт %{recording_length}',
  recordingStoppedMaxSize:
    'Сабт қатъ шуд, зеро андозаи файл ба ҳадди аксар наздик шуда истодааст',
  recordVideoBtn: 'Сабти видео',
  recoveredAllFiles:
    'Мо ҳамаи файлҳоро барқарор кардем. Акнун шумо метавонед боргузориро идома диҳед.',
  recoveredXFiles: {
    '0': 'Мо %{smart_count} файлро пурра барқарор карда натавонистем. Лутфан онро аз нав интихоб кунед ва боргузориро идома диҳед.',
    '1': 'Мо %{smart_count} файлро пурра барқарор карда натавонистем. Лутфан онҳоро аз нав интихоб кунед ва боргузориро идома диҳед.',
  },
  removeFile: 'Хориҷ кардани файл',
  removeFileWithFilename: 'Хориҷ кардани файли %{file}',
  renameOrMove: 'Иваз кардани ном ё интиқол…',
  renameOrMovePrompt: 'Номи нав ё роҳ нисбат ба ҷузвдони решагӣ:',
  renameOrMoveTitle: 'Иваз кардани ном ё интиқоли "%{name}"',
  reSelect: 'Аз нав интихоб кардан',
  resetFilter: 'Бекор кардани филтр',
  resetSearch: 'Бекор кардани ҷустуҷӯ',
  resume: 'Идома додан',
  resumeAllUploads: 'Идома додани ҳамаи боргузориҳо',
  resumeUpload: 'Идома додани боргузорӣ',
  resumeUploadWithFilename: 'Идома додани боргузории %{file}',
  retry: 'Аз нав кӯшиш кардан',
  retryUpload: 'Боргузориро аз нав кӯшиш кардан',
  revert: 'Бекор кардани тағйирот',
  rotate: '90° давр задан',
  s3AlreadyExists: 'Файл ё ҷузвдон бо ин ном аллакай мавҷуд аст',
  s3Conflict:
    'Файл ҳангоми интиқол тағйир ёфт. Ҷузвдонро навсозӣ кунед ва аз нав кӯшиш кунед',
  s3DestinationMustBeFile: 'Таъиноти файл бояд роҳи файл бошад',
  s3FileTooLargeToMove:
    'Файлҳои калонтар аз 5 GB-ро дар ин ҷо интиқол додан ё номашонро иваз кардан мумкин нест',
  s3FolderIntoItself: 'Ҷузвдонро ба дохили худаш интиқол додан мумкин нест',
  s3FolderMoveNotSupported: 'Ҷузвдонҳоро бояд унсур ба унсур интиқол дод',
  s3FolderNotEmpty: 'Ҷузвдон холӣ нест',
  s3InvalidGrant: 'Дастрасии шумо ба ин анбор тасдиқ карда нашуд',
  s3InvalidName: 'Ин ном иҷозат дода намешавад',
  s3NotConfigured: 'Ин анбор дастрас нест',
  s3NotFound: 'Файл ё ҷузвдон дигар вуҷуд надорад',
  s3OutsideAllowedFolder:
    'Ин роҳ берун аз ҷузвдонест, ки шумо ба он дастрасӣ доред',
  s3ReadOnlySession: 'Ҷаласаи шумо танҳо барои хондан аст',
  s3RequestFailed: 'Дархост ба анбор ноком шуд',
  s3SelectedInOtherSession:
    'Ин файл дар ҷаласаи дигари анбор интихоб шуда буд. Аз нав пайваст шавед ва онро боз интихоб кунед',
  save: 'Нигоҳ доштан',
  saveChanges: 'Нигоҳ доштани тағйирот',
  search: 'Ҷустуҷӯ',
  searchImages: 'Ҷустуҷӯи тасвирҳо',
  selectX: {
    '0': 'Интихоб кардани %{smart_count}',
    '1': 'Интихоб кардани %{smart_count}',
  },
  sessionRestored: 'Ҷаласа барқарор шуд',
  showErrorDetails: 'Нишон додани тафсилоти хато',
  signInWithGoogle: 'Ворид шудан бо Google',
  smartCdnUrlPrompt: 'URL-и Smart CDN:',
  smile: 'Табассум кунед!',
  startAudioRecording: 'Оғози сабти аудио',
  startCapturing: 'Оғози сабти экран',
  startRecording: 'Оғози сабти видео',
  stopAudioRecording: 'Қатъи сабти аудио',
  stopCapturing: 'Қатъи сабти экран',
  stopRecording: 'Қатъи сабти видео',
  storageNotConnected: 'Пеш аз боргузорӣ ба Transloadit Storage пайваст шавед',
  storing: 'Нигоҳ дошта шуда истодааст…',
  streamActive: 'Ҷараён фаъол аст',
  streamPassive: 'Ҷараён ғайрифаъол аст',
  submitRecordedFile: 'Фиристодани файли сабтшуда',
  takePicture: 'Гирифтани акс',
  takePictureBtn: 'Гирифтани акс',
  takeScreenshot: 'Гирифтани акси экран',
  unnamed: 'Беном',
  upload: 'Боргузорӣ кардан',
  uploadComplete: 'Боргузорӣ анҷом ёфт',
  uploadFailed: 'Боргузорӣ ноком шуд',
  uploadFiles: 'Боргузории файлҳо',
  uploading: 'Боргузорӣ',
  uploadingXFiles: {
    '0': '%{smart_count} файл боргузорӣ шуда истодааст',
    '1': '%{smart_count} файл боргузорӣ шуда истодааст',
  },
  uploadPaused: 'Боргузорӣ таваққуф шуд',
  uploadStalled:
    'Боргузорӣ дар давоми %{seconds} сония пеш нарафтааст. Шояд онро аз нав кӯшиш кардан беҳтар бошад.',
  uploadXFiles: {
    '0': 'Боргузорӣ кардани %{smart_count} файл',
    '1': 'Боргузорӣ кардани %{smart_count} файл',
  },
  uploadXNewFiles: {
    '0': 'Боргузорӣ кардани +%{smart_count} файл',
    '1': 'Боргузорӣ кардани +%{smart_count} файл',
  },
  webdavCannotConnect: 'Пайвастшавӣ ба сервер ғайриимкон аст',
  xFilesSelected: {
    '0': '%{smart_count} файл интихоб шуд',
    '1': '%{smart_count} файл интихоб шуд',
  },
  xMoreFilesAdded: {
    '0': 'Боз %{smart_count} файл илова шуд',
    '1': 'Боз %{smart_count} файл илова шуд',
  },
  xTimeLeft: '%{time} боқӣ мондааст',
  youCanOnlyUploadFileTypes:
    'Шумо танҳо инҳоро боргузорӣ карда метавонед: %{types}',
  youCanOnlyUploadX: {
    '0': 'Шумо танҳо %{smart_count} файл боргузорӣ карда метавонед',
    '1': 'Шумо танҳо %{smart_count} файл боргузорӣ карда метавонед',
  },
  youHaveToAtLeastSelectX: {
    '0': 'Шумо бояд ҳадди ақал %{smart_count} файл интихоб кунед',
    '1': 'Шумо бояд ҳадди ақал %{smart_count} файл интихоб кунед',
  },
  zoomIn: 'Калон кардан',
  zoomOut: 'Хурд кардан',
}

// @ts-expect-error untyped
if (typeof Uppy !== 'undefined') {
  // @ts-expect-error untyped
  globalThis.Uppy.locales.tg_TJ = tg_TJ
}

export default tg_TJ
