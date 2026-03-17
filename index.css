/* ============================================================
   TB Plan — index.js
   Shared JavaScript for all pages
   ============================================================ */

// ===== i18n Data =====
const T = {
  mn: {
    // Nav
    "nav.about": "Бидний тухай",
    "nav.services": "Үйлчилгээ",
    "nav.directions": "Чиглэлүүд",
    "nav.details": "Дэлгэрэнгүй",
    "nav.contact": "Холбоо барих",
    "nav.home": "нүүр",

    // index.html — Hero
    "hero.h1": "Дижитал, дизайн, медиа, вэб хөгжүүлэлт — нэг баг, нэг төлөвлөгөө.",
    "hero.sub": "Бид таны төслийг эхнээс нь дуустал нь хөтөлнө: вэб сайт хөгжүүлэлт, интерьер төлөвлөлт, фото/видео үйлдвэрлэл, визийн материал бүрдүүлэлт, мөн барилгын материалын нийлүүлэлт.",
    "hero.btn": "Үндсэн чиглэлүүд",
    "stat.directions": "Үндсэн чиглэл",
    "stat.integrated.num": "Нэгдсэн",
    "stat.integrated.label": "Төлөвлөлт → Гүйцэтгэл",
    "stat.onestop": "Нэг цэгийн үйлчилгээ",

    // index.html — Services grid
    "services.h2": "Үндсэн чиглэлүүд",
    "services.p": "Карт дээр дарвал тухайн чиглэлийн дэлгэрэнгүй хуудас руу очно.",
    "card.web.h3": "Вэб хөгжүүлэлт",
    "card.web.p": "Орчин үеийн вэб сайт, лендинг, систем, админ самбар.",
    "card.interior.h3": "Интерьер дизайн",
    "card.interior.p": "Төлөвлөлт, концепт, 3D зураглал, материалын шийдэл.",
    "card.media.h3": "Медиа продакшн",
    "card.media.p": "Фото/видео, рийл, эвлүүлэг, брэнд визуал контент.",
    "card.visa.h3": "Виз зөвлөгөө",
    "card.visa.p": "Материал шалгалт, маягт, зөвлөгөө, бэлтгэл.",
    "card.materials.h3": "Барилгын материал",
    "card.materials.p": "Нийлүүлэлт, ханган нийлүүлэлт, хүргэлт.",
    "card.food.h3": "Хүнс",
    "card.food.p": "Импорт, ханган нийлүүлэлт, бөөний болон тогтмол нийлүүлэлт.",
    "card.link": "Дэлгэрэнгүй →",

    // About
    "about.h2": "TB Plan — Бидний тухай",
    "about.sub": "Манай байгууллагын үйл ажиллагааны товч танилцуулга",
    "about.p1.h3": "Бид юу хийдэг вэ?",
    "about.p1.p": "TB Plan нь олон чиглэлийн нэгдсэн үйлчилгээ үзүүлдэг байгууллага. Бид төслийг зөв төлөвлөөд, хурдан хэрэгжүүлж, хэмжигдэхүйц үр дүн гаргахад төвлөрдөг.",
    "about.l1": "Вэб сайт болон вэб систем хөгжүүлэлт",
    "about.l2": "Интерьер төлөвлөлт, концепт болон 3D зураглал",
    "about.l3": "Фото/видео үйлдвэрлэл, контент бүтээлт",
    "about.l4": "Визийн материал бүрдүүлэлт, зөвлөгөө, шалгалт",
    "about.l5": "Барилгын материалын ханган нийлүүлэлт",
    "about.p2.h3": "Бид хэрхэн ажилладаг вэ?",
    "about.p2.p": "Эхлээд хэрэгцээг тодорхойлж, дараа нь төлөвлөгөө + хугацаа + үнэ санал болгоно. Явцын тайлан, загвар/драфт, засваруудыг тодорхой стандарттайгаар хүргүүлдэг.",
    "pill.research": "Судалгаа",
    "pill.plan": "Төлөвлөлт",
    "pill.design": "Дизайн",
    "pill.prod": "Үйлдвэрлэл",

    // Slider
    "slide.web.h2": "Вэб хөгжүүлэлт",
    "slide.web.p": "Орчин үеийн, хурдан, найдвартай вэб шийдлүүдийг бизнесийн хэрэгцээнд нийцүүлэн хөгжүүлж байна.",
    "slide.web.l1": "Бизнесийн вэб сайт + гишүүнчлэл",
    "slide.web.l2": "Админ самбар / CRM / захиалгын систем",
    "slide.web.l3": "SEO суурь + хурдны оновчлол",
    "slide.interior.h2": "Интерьер дизайн",
    "slide.interior.p": "Орон зайн төлөвлөлтөөс дотоод засал чимэглэл, материал, гэрэлтүүлэг, 3D зураглал хүртэл цогц шийдэл.",
    "slide.interior.l1": "Интерьер дизайн",
    "slide.interior.l2": "Тавилгын дизайн",
    "slide.interior.l3": "Гүйцэтгэл",
    "slide.media.h2": "Медиа продакшн",
    "slide.media.p": "Брэндийн фото/видео, бүтээгдэхүүний зураг авалт, рийл, эвлүүлэг, өнгө засвар.",
    "slide.media.l1": "Брендийн фото, видео зураг авалт",
    "slide.media.l2": "Рийл, реклам, богино контент",
    "slide.media.l3": "Эвлүүлэг, өнгө засвар, motion",
    "slide.visa.h2": "Виз зөвлөгөө",
    "slide.visa.p": "Олон улсын визний үйл явцыг хялбаршуулж, материал бүрдүүлэлт, шалгалт, маягт бөглөлтөд найдвартай тусална.",
    "slide.visa.l1": "Материалын checklist + шалгалт",
    "slide.visa.l2": "Маягт бөглөлтийн заавар",
    "slide.visa.l3": "Ярилцлагын бэлтгэл",
    "slide.materials.h2": "Барилгын материал",
    "slide.materials.p": "Хайрга, Дайрга, Цагаан замаск, Бетон зуурмагны үйлдвэр.",
    "slide.materials.l1": "Бетон, Цагаан замаск",
    "slide.materials.l2": "Хайрга, Дайрга",
    "slide.materials.l3": "Бусад материалууд",
    "slide.food.h2": "Хүнс",
    "slide.food.p": "Импорт, ханган нийлүүлэлт, тогтмол нийлүүлэлт — байгууллага болон бөөний хэрэгцээнд.",
    "slide.food.l1": "Ногоо • тогтмол нийлүүлэлт",
    "slide.food.l2": "Ложистик • агуулах • хүргэлт",
    "slide.food.l3": "Үнэ санал • гэрээт нийлүүлэлт",

    // Contact
    "contact.h2": "Холбоо барих",
    "contact.sub": "Та юу хийх гэж байгаагаа бичээрэй — бид төлөвлөгөөтэйгөөр хариулна.",
    "form.name": "Нэр",
    "form.contact": "И-мэйл / Утас",
    "form.service": "Сонирхож буй үйлчилгээ",
    "form.message": "Мессеж",
    "form.submit": "Илгээх",

    // Footer
    "footer.rights": "Бүх эрх хуулиар хамгаалагдсан.",
    "footer.up": "Дээш очих ↑",
    "mobile.home": "Нүүр",
    "back": "Back",

    // design/index hero (shared)
    "hero.eyebrow": "Interior Design • Furniture • Execution",
    "brandSub": "Plan • Интерьер",
    "nav.interior": "Интерьер",
    "nav.furniture": "Тавилга",
    "nav.execution": "Гүйцэтгэл",
    "nav.coffee": "Кофе шоп",
    "nav.child": "Хүүхдийн өрөө",
    "nav.cta": "Үнийн санал",
    "hero.h1.design": "Орчин үеийн интерьер — зөв төлөвлөлтөөс бодит гүйцэтгэл хүртэл.",
    "hero.sub.design": "TB Plan нь <b>концепт → layout → материал → гэрэлтүүлэг → 3D зураглал → гүйцэтгэл</b> гэсэн нэг шугамаар шийдэж өгнө. Доорх зургууд дээр дарж томоор үзээрэй.",
    "hero.btn1": "Интерьер дизайн",
    "hero.btn2": "Тавилгын дизайн",
    "hero.btn3": "Гүйцэтгэл",
    "hero.btn4": "Хүүхдийн өрөө",
    "mini1.title": "Бидний өгөх зүйл",
    "mini1.body": "Концепт • 3D • Материалын сонголт • Зураг төсөл",
    "mini2.title": "Процесс",
    "mini2.body": "Хэмжилт → санал → зураглал → засвар → финал",
    "mini3.title": "Үнийн санал авах",
    "mini3.body": "Талбай (м²) + хэв маяг + төсөв + хугацаа — 4 мэдээлэл байхад хангалттай",
    "s1.h2": "Интерьер дизайн — Оффис / Ажлын орчин",
    "s1.p": "Ажлын байрны зохион байгуулалт, гэрэлтүүлэг, хадгалалт.",
    "s2.h2": "Тавилгын дизайн — Built-in шийдэл",
    "s2.p": "Шүүгээ, ор, ажлын ширээ, хадгалалтын уялдаа.",
    "s3.h2": "Гүйцэтгэл — Талбайн бодит ажил",
    "s3.p": "Материал, угсралт, деталь гүйцэтгэл, хугацааны хяналт.",
    "s4.h2": "Кофе шоп / Үйлчилгээний талбай",
    "s4.p": "Урсгал, суудлын зохион байгуулалт, гэрэлтүүлэг, брэнд мэдрэмжтэй интерьер шийдэл.",
    "s5.h2": "Хүүхдийн өрөө — Төлөвлөлт + тавилгын шийдэл",
    "s5.p": "Аюулгүй байдал, хадгалалт, гэрэл, сурах/амрах бүсийг нэгтгэсэн шийдлүүд.",
    "meta.ceiling": "Тааз", "meta.material": "Материал", "meta.func": "Функц",
    "meta.days": "Хугацаа", "meta.day": "хоног", "meta.control": "Хяналт",
    "meta.seats": "Суудал", "meta.goal": "Зорилго",
    "chip.storage": "Хадгалалт", "chip.material": "Материал",
    "chip.detail": "Деталь", "chip.control": "Хяналт",
    "office.cap1": "Нийт орчны зохион байгуулалт", "office.cap2": "Танхим / презентацийн хэсэг",
    "office.cap3": "Амралтын/coffee булан", "office.cap4": "Ажлын ширээний кластер",
    "office.cap5": "Тавиур + хадгалалтын шийдэл",
    "furn.cap1": "Шүүгээний фасад + муруй тавиур", "furn.cap2": "Өрөөний layout / 3D",
    "furn.cap3": "Ор + ажлын ширээний интеграц", "furn.cap4": "Деталь + хадгалалтын шийдэл",
    "exec.cap1": "Ерөнхий харагдац", "exec.cap2": "Зохион байгуулалт / интерьер булан",
    "exec.cap3": "Деталь / материалын мэдрэмж", "exec.cap4": "Талбайн шийдэл / өндөр зай",
    "exec.cap5": "Гүйцэтгэлийн явц", "exec.cap6": "Материалын уялдаа",
    "exec.cap7": "Тавилга/угсралтын деталь", "exec.cap8": "Финал харагдац",
    "cafe.cap1": "Ерөнхий орчин / суудлын бүс", "cafe.cap2": "Бар/кассын уялдаа",
    "cafe.cap3": "Акцент гэрэл + материал", "cafe.cap4": "Деталь / close-up",
    "cafe.cap5": "Нэмэлт өнцөг",
    "child.cap1": "Ерөнхий төлөвлөлт", "child.cap2": "Сурах ширээ + гэрэлтүүлэг",
    "child.cap3": "Шүүгээ / хадгалалт", "child.cap4": "Деталь",
    "child.func": "Сурах + Унтах",
    "footer.text": "Интерьер • Тавилга • Гүйцэтгэл",

    // media.html
    "hero.eyebrow.media": "TB PLAN • МЕДИА ПРОДАКШН",
    "hero.h1.media": "Медиа продакшн",
    "hero.sub.media": "Брэндийн фото/видео, бүтээгдэхүүний зураг авалт, рийл, реклам, эвлүүлэг, өнгө засвар, motion зэрэг цогц контент үйлдвэрлэл.",
    "hero.btn1.media": "Үнийн санал харах", "hero.btn2.media": "Жишээ ажил",
    "meta.format.title": "Контент хэлбэр", "meta.pkg.title": "Багц",
    "meta.pkg.note": "Тогтмол хамтын ажиллагаа боломжтой",
    "about.h2.media": "Юу хийдэг вэ?",
    "about.p.media": "Доорх үйлчилгээ тус бүр дээр дарвал тухайн хэсэг рүү зөөлөн очно.",
    "chip.photo": "Фото зураг авалт", "chip.video": "Видео зураг авалт",
    "chip.edit": "Эвлүүлэг & Өнгө засвар", "chip.examples": "Жишээ ажил", "chip.price": "Үнэ",
    "svc.photo.h3": "Брендийн / бүтээгдэхүүний фото",
    "svc.photo.l1": "Studio / location зураг авалт",
    "svc.photo.l2": "E-commerce бүтээгдэхүүний зураг",
    "svc.photo.l3": "Lookbook / campaign зураг",
    "svc.video.h3": "Видео / Рийл / Реклам",
    "svc.video.l1": "Short-form (Reels/TikTok/Shorts)",
    "svc.video.l2": "Реклам, танилцуулга видео",
    "svc.video.l3": "Storyboard + зураг авалт + post",
    "svc.edit.h3": "Эвлүүлэг, өнгө засвар, motion",
    "svc.edit.l1": "Cut / pacing / subtitle", "svc.edit.l2": "Color grading",
    "svc.edit.l3": "Motion graphics",
    "svc.flow.h3": "Ажлын урсгал",
    "svc.flow.l1": "<b>Бриф</b> — зорилго, формат, хугацаа",
    "svc.flow.l2": "<b>Сценар/Storyboard</b> — 1–2 хувилбар",
    "svc.flow.l3": "<b>Үйлдвэрлэл</b> — зураг авалт / контент",
    "svc.flow.l4": "<b>Post</b> — эвлүүлэг, өнгө, засвар",
    "examples.h2": "Жишээ ажил",
    "examples.p": "Доорх нь demo placeholder.",
    "examples.photos": "Зураг", "examples.videos": "Бичлэгүүд",
    "gcard.1": "Брендийн фото зураг авалт", "gcard.2": "Бүтээгдэхүүний зураг (e-commerce)",
    "gcard.3": "Бүтээгдэхүүний зураг (e-commerce)", "gcard.4": "Reels / short-form контент",
    "vhint": "Tap to open",
    "pricing.h2.media": "Үйлчилгээний үнэ",
    "pricing.p.media": "Энэ нь суурь үнэ. Ажлын хэмжээ/байршил/өдөр/хүний тооноос шалтгаалж өөрчлөгдөнө.",
    "pc1.h3": "Social Media Graphic", "pc1.sub": "Single Asset",
    "pc1.l1": "Нэг пост / нэг дизайн", "pc1.l2": "Сошиал формат", "pc1.l3": "Үнэ нь төвөгшлөөс хамаарна",
    "pc2.h3": "Short Video", "pc2.sub": "60 sec or less",
    "pc2.l1": "Видео эвлүүлэг", "pc2.l2": "Motion graphics", "pc2.l3": "Reels / Shorts формат",
    "pc3.h3": "Full Production Video", "pc3.sub": "Story + shooting + full edit",
    "pc3.l1": "Сценар / Storyboard", "pc3.l2": "Зураг авалт", "pc3.l3": "Бүрэн эвлүүлэг + өнгө засвар",
    "pc4.h3": "Video Editing", "pc4.sub": "Without shooting",
    "pc4.l1": "Зөвхөн эвлүүлэг", "pc4.l2": "Color grading", "pc4.l3": "Motion / subtitle",
    "btn.order": "Захиалах", "btn.quote": "Үнийн санал авах", "badge.popular": "Popular",
    "note.monthly": "<b>Тогтмол хамтын ажиллагаа:</b> сар бүр 8–20 контент үйлдвэрлэх бол багцаар илүү хямд үнээр санал болгоно.",
    "footer.rights.media": "Бүх эрх хуулиар хамгаалагдсан.",
    "footer.home.media": "Нүүр рүү",

    // uilchilgee.html
    "hero.h1.uilchilgee": "TB Plan — Үйлчилгээ",
    "hero.sub.uilchilgee": "Вэб хөгжүүлэлт, медиа үйлдвэрлэл — нэг баг, нэг төлөвлөгөө.",
    "hero.btn.uilchilgee": "Үйлчилгээ үзэх",
    "stat.services": "Үндсэн үйлчилгээ",
    "stat.onestop.u": "Нэг цэгийн шийдэл",
    "stat.fast.num": "Шуурхай", "stat.fast.label": "Төлөвлөлт → Гүйцэтгэл",
    "section.h2": "Манай үйлчилгээ",
    "section.p": "Чиглэл бүр дээр дарж дэлгэрэнгүй үзэж болно.",
    "svc.web.h3": "Вэб хөгжүүлэлт", "svc.web.p": "Вэб сайт, лендинг, систем, админ самбар.",
    "svc.web.l1": "SEO + Analytics суурь", "svc.web.l2": "Form + Захиалга/мессеж",
    "svc.web.l3": "Admin систем / CRM",
    "svc.media.h3": "Медиа продакшн", "svc.media.p": "Рийл, реклам, фото/видео эвлүүлэг.",
    "svc.media.l1": "Контент төлөвлөгөө", "svc.media.l2": "Видео эвлүүлэг + color",
    "svc.media.l3": "Брэнд визуал дизайн",
    "card.link.u": "Үнэ харах →",
    "pricing.h2.u": "Үнийн санал",
    "pricing.p.u": "Суурь үнэ — ажлын хэмжээнээс шалтгаалж өөрчлөгдөнө.",
    "pricing.web": "🌐 Web хөгжүүлэлт", "pricing.app": "📱 Mobile Application",
    "per.month": "сар", "contract": "Гэрээ", "month": "сар",
    "wstart.l1": "1–5 хуудастай вэб сайт", "wstart.l2": "Mobile & desktop",
    "wstart.l3": "Бэлэн загвар", "wstart.l4": "Контент (1–2/сар)",
    "wstart.l5": "Domain + hosting", "wstart.l6": "Суурь аюулгүй байдал",
    "wstart.l7": "📌 Гэрээ: 6–12 сар",
    "wstd.l1": "5–10 хуудас", "wstd.l2": "Custom дизайн", "wstd.l3": "Контент (4/сар)",
    "wstd.l4": "SEO суурь", "wstd.l5": "Хурдны оптимизаци",
    "wstd.l6": "Form / захиалга", "wstd.l7": "📌 Гэрээ: 12 сар",
    "wbiz.l1": "10+ хуудас / dynamic", "wbiz.l2": "Admin panel",
    "wbiz.l3": "Захиалга, мессеж", "wbiz.l4": "SEO + Google index",
    "wbiz.l5": "Backup + security", "wbiz.l6": "Priority support",
    "wbiz.l7": "📌 Гэрээ: 12 сар",
    "mvp.l1": "Android эсвэл iOS", "mvp.l2": "Энгийн UI/UX",
    "mvp.l3": "Контент удирдлага", "mvp.l4": "Store байршуулалт",
    "mvp.l5": "📌 Гэрээ: 12 сар",
    "bapp.l1": "Android + iOS", "bapp.l2": "Admin систем",
    "bapp.l3": "Push notification", "bapp.l4": "Security + backup",
    "bapp.l5": "📌 Гэрээ: 12–18 сар",
    "nav.about.u": "Бидний тухай", "nav.services.u": "Үйлчилгээ",
    "nav.directions.u": "Чиглэлүүд", "nav.details.u": "Дэлгэрэнгүй",
    "nav.contact.u": "Холбоо барих",

    // web.html
    "term.file": "терминал — tb-plan",
    "svc.h3": "// үйлчилгээ",
    "svc.l1": "Өндөр гүйцэтгэлтэй бизнес вэб сайтууд",
    "svc.l2": "Борлуулалт чиглэсэн лендинг хуудсууд",
    "svc.l3": "Админ самбар, CRM системүүд",
    "svc.l4": "Онлайн худалдааны платформууд",
    "svc.l5": "Захиалгат вэб аппликейшн",
    "stack.h3": "// технологийн стек",
    "footer.web": "© 2026 TB Plan — бэлэн загвар биш, цэвэр код.",

    // Shared form options
    serviceOptions: ["Вэб хөгжүүлэлт","Интерьер дизайн","Медиа продакшн","Виз зөвлөгөө","Барилгын материал","Хүнс"],
    formSuccess: (n, s) => `Баярлалаа, ${n}! "${s}" үйлчилгээний хүсэлтийг хүлээн авлаа. Бид эргэн холбогдоно.`,

    // Terminal script
    terminal: [
      "$ npm install",
      "✔ хамааралтай сангууд суулгагдлаа", "",
      "$ npm run build",
      "> tb-plan@1.0.0 build", "> next build", "",
      "✓ Амжилттай хөрвүүллээ",
      "✓ Кодын шалгалт хийж байна",
      "✓ Статик хуудсууд үүсгэж байна", "",
      "🚀 Build 2.3 секундэд амжилттай дууслаа", "",
      "Production орчинд бэлэн боллоо."
    ]
  },

  zh: {
    // Nav
    "nav.about": "关于我们",
    "nav.services": "服务",
    "nav.directions": "服务方向",
    "nav.details": "详细介绍",
    "nav.contact": "联系我们",
    "nav.home": "首页",

    // index.html — Hero
    "hero.h1": "数字、设计、媒体、网站开发 — 一支团队，一个方案。",
    "hero.sub": "我们全程陪伴您的项目：网站开发、室内设计、摄影/视频制作、签证材料准备以及建筑材料供应。",
    "hero.btn": "核心服务",
    "stat.directions": "核心服务方向",
    "stat.integrated.num": "一体化",
    "stat.integrated.label": "规划 → 执行",
    "stat.onestop": "一站式服务",

    // Services grid
    "services.h2": "核心服务",
    "services.p": "点击卡片可查看该服务的详细页面。",
    "card.web.h3": "网站开发",
    "card.web.p": "现代化网站、落地页、系统、管理后台。",
    "card.interior.h3": "室内设计",
    "card.interior.p": "规划、概念设计、3D效果图、材料方案。",
    "card.media.h3": "媒体制作",
    "card.media.p": "摄影/视频、Reels、剪辑、品牌视觉内容。",
    "card.visa.h3": "签证咨询",
    "card.visa.p": "材料审核、表格填写、咨询指导、面试准备。",
    "card.materials.h3": "建筑材料",
    "card.materials.p": "供应、采购、配送服务。",
    "card.food.h3": "食品",
    "card.food.p": "进口、供应链、批发及定期供货。",
    "card.link": "查看详情 →",

    // About
    "about.h2": "TB Plan — 关于我们",
    "about.sub": "公司业务简介",
    "about.p1.h3": "我们做什么？",
    "about.p1.p": "TB Plan 是一家提供多领域综合服务的公司。我们专注于精准规划、快速落地，交付可量化的成果。",
    "about.l1": "网站及系统开发",
    "about.l2": "室内设计规划、概念与3D效果图",
    "about.l3": "摄影/视频制作、内容创作",
    "about.l4": "签证材料整理、咨询与审核",
    "about.l5": "建筑材料供应与管理",
    "about.p2.h3": "我们如何工作？",
    "about.p2.p": "首先明确需求，然后提供计划 + 时间表 + 报价。以明确的标准交付进度报告、设计稿及修改版本。",
    "pill.research": "调研",
    "pill.plan": "规划",
    "pill.design": "设计",
    "pill.prod": "制作",

    // Slider
    "slide.web.h2": "网站开发",
    "slide.web.p": "为企业需求定制开发现代、快速、可靠的网站解决方案。",
    "slide.web.l1": "企业网站 + 会员系统",
    "slide.web.l2": "管理后台 / CRM / 订单系统",
    "slide.web.l3": "SEO基础 + 速度优化",
    "slide.interior.h2": "室内设计",
    "slide.interior.p": "从空间规划到内部装饰、材料、照明及3D效果图的一体化解决方案。",
    "slide.interior.l1": "室内设计",
    "slide.interior.l2": "家具设计",
    "slide.interior.l3": "施工执行",
    "slide.media.h2": "媒体制作",
    "slide.media.p": "品牌摄影/视频、产品拍摄、Reels、剪辑、色彩调整。",
    "slide.media.l1": "品牌摄影、视频拍摄",
    "slide.media.l2": "Reels、广告、短视频",
    "slide.media.l3": "剪辑、调色、动态效果",
    "slide.visa.h2": "签证咨询",
    "slide.visa.p": "简化国际签证流程，提供材料准备、审核及表格填写方面的可靠帮助。",
    "slide.visa.l1": "材料清单 + 审核",
    "slide.visa.l2": "表格填写指导",
    "slide.visa.l3": "面试准备",
    "slide.materials.h2": "建筑材料",
    "slide.materials.p": "砾石、碎石、白水泥、混凝土搅拌站。",
    "slide.materials.l1": "混凝土、白水泥",
    "slide.materials.l2": "砾石、碎石",
    "slide.materials.l3": "其他材料",
    "slide.food.h2": "食品",
    "slide.food.p": "进口、供应链、定期供货——面向企业及批发需求。",
    "slide.food.l1": "蔬菜 • 定期供货",
    "slide.food.l2": "物流 • 仓储 • 配送",
    "slide.food.l3": "报价 • 合同供货",

    // Contact
    "contact.h2": "联系我们",
    "contact.sub": "请告诉我们您想做什么——我们将以有条理的计划回复您。",
    "form.name": "姓名",
    "form.contact": "邮箱 / 电话",
    "form.service": "感兴趣的服务",
    "form.message": "留言",
    "form.submit": "发送",

    // Footer
    "footer.rights": "版权所有。",
    "footer.up": "返回顶部 ↑",
    "mobile.home": "首页",
    "back": "返回",

    // design / index hero shared
    "hero.eyebrow": "室内设计 • 家具 • 施工",
    "brandSub": "Plan • 室内设计",
    "nav.interior": "室内设计",
    "nav.furniture": "家具",
    "nav.execution": "施工",
    "nav.coffee": "咖啡厅",
    "nav.child": "儿童房",
    "nav.cta": "获取报价",
    "hero.h1.design": "现代室内设计 — 从规划到完美施工。",
    "hero.sub.design": "TB Plan 提供 <b>概念 → 布局 → 材料 → 灯光 → 3D渲染 → 施工</b> 一站式服务。点击下方图片可放大查看。",
    "hero.btn1": "室内设计",
    "hero.btn2": "家具设计",
    "hero.btn3": "施工",
    "hero.btn4": "儿童房",
    "mini1.title": "我们提供的服务",
    "mini1.body": "概念 • 3D效果图 • 材料选择 • 设计方案",
    "mini2.title": "服务流程",
    "mini2.body": "测量 → 提案 → 效果图 → 修改 → 最终方案",
    "mini3.title": "获取报价",
    "mini3.body": "面积(㎡) + 风格 + 预算 + 工期 — 4项信息即可",
    "s1.h2": "室内设计 — 办公 / 工作环境",
    "s1.p": "办公空间布局、照明、储物及开放式办公方案。",
    "s2.h2": "家具设计 — 定制内嵌方案",
    "s2.p": "衣柜、床、工作台、储物一体化定制方案。",
    "s3.h2": "施工 — 现场实际作业",
    "s3.p": "材料、安装、细节施工、工期管理。",
    "s4.h2": "咖啡厅 / 服务空间",
    "s4.p": "动线规划、座位布局、照明设计、品牌感室内方案。",
    "s5.h2": "儿童房 — 规划 + 家具方案",
    "s5.p": "安全设计、储物、灯光、学习/休息区一体化方案。",
    "meta.ceiling": "层高", "meta.material": "材料", "meta.func": "功能",
    "meta.days": "工期", "meta.day": "天", "meta.control": "监管",
    "meta.seats": "座位数", "meta.goal": "目标",
    "chip.storage": "储物", "chip.material": "材料",
    "chip.detail": "细节", "chip.control": "监管",
    "office.cap1": "整体空间布局", "office.cap2": "会议/展示区",
    "office.cap3": "休息/咖啡角", "office.cap4": "工位集群",
    "office.cap5": "置物架 + 储物方案",
    "furn.cap1": "柜门正面 + 弧形搁架", "furn.cap2": "房间布局 / 3D效果",
    "furn.cap3": "床 + 工作台一体化", "furn.cap4": "细节 + 储物方案",
    "exec.cap1": "整体外观 / 空间方案", "exec.cap2": "布局 / 室内一角",
    "exec.cap3": "细节 / 材质感受", "exec.cap4": "空间方案 / 层高",
    "exec.cap5": "施工进度", "exec.cap6": "材料协调",
    "exec.cap7": "家具/安装细节", "exec.cap8": "最终效果",
    "cafe.cap1": "整体环境 / 座位区", "cafe.cap2": "吧台/收银区",
    "cafe.cap3": "重点灯光 + 材料", "cafe.cap4": "细节 / 特写",
    "cafe.cap5": "其他角度",
    "child.cap1": "整体规划", "child.cap2": "学习桌 + 灯光",
    "child.cap3": "衣柜 / 储物", "child.cap4": "细节",
    "child.func": "学习 + 睡眠",
    "footer.text": "室内设计 • 家具 • 施工",

    // media.html
    "hero.eyebrow.media": "TB PLAN • 媒体制作",
    "hero.h1.media": "媒体制作",
    "hero.sub.media": "品牌摄影/视频、产品拍摄、Reels、广告、剪辑、调色、动态效果等一体化内容制作服务。",
    "hero.btn1.media": "查看报价", "hero.btn2.media": "作品案例",
    "meta.format.title": "内容形式", "meta.pkg.title": "套餐",
    "meta.pkg.note": "支持长期合作",
    "about.h2.media": "我们提供什么？",
    "about.p.media": "点击下方服务类别可跳转至对应区域。",
    "chip.photo": "摄影", "chip.video": "视频拍摄",
    "chip.edit": "剪辑与调色", "chip.examples": "作品案例", "chip.price": "价格",
    "svc.photo.h3": "品牌 / 产品摄影",
    "svc.photo.l1": "棚拍 / 外景拍摄",
    "svc.photo.l2": "电商产品图",
    "svc.photo.l3": "Lookbook / 广告大片",
    "svc.video.h3": "视频 / Reels / 广告",
    "svc.video.l1": "短视频 (Reels/TikTok/Shorts)",
    "svc.video.l2": "广告、品牌介绍视频",
    "svc.video.l3": "分镜 + 拍摄 + 后期",
    "svc.edit.h3": "剪辑、调色与动态效果",
    "svc.edit.l1": "剪辑 / 节奏 / 字幕",
    "svc.edit.l2": "色彩调整",
    "svc.edit.l3": "动态图形",
    "svc.flow.h3": "工作流程",
    "svc.flow.l1": "<b>简报</b> — 目标、格式、工期",
    "svc.flow.l2": "<b>脚本/分镜</b> — 1–2个方案",
    "svc.flow.l3": "<b>制作</b> — 拍摄 / 素材整理",
    "svc.flow.l4": "<b>后期</b> — 剪辑、调色、修改",
    "examples.h2": "作品案例",
    "examples.p": "以下为示例内容，可替换为您的真实图片/视频。",
    "examples.photos": "图片", "examples.videos": "视频",
    "gcard.1": "品牌摄影作品", "gcard.2": "产品图 (电商)",
    "gcard.3": "产品图 (电商)", "gcard.4": "Reels / 短视频内容",
    "vhint": "点击查看",
    "pricing.h2.media": "服务价格",
    "pricing.p.media": "以下为基础价格，实际费用因工作量、地点、天数等因素而有所不同。",
    "pc1.h3": "社交媒体图片", "pc1.sub": "单件素材",
    "pc1.l1": "单帖 / 单设计", "pc1.l2": "社交媒体格式", "pc1.l3": "价格根据复杂程度而定",
    "pc2.h3": "短视频", "pc2.sub": "60秒以内",
    "pc2.l1": "视频剪辑", "pc2.l2": "动态图形", "pc2.l3": "Reels / Shorts格式",
    "pc3.h3": "全流程视频制作", "pc3.sub": "脚本 + 拍摄 + 完整后期",
    "pc3.l1": "脚本 / 分镜", "pc3.l2": "视频拍摄", "pc3.l3": "完整剪辑 + 调色",
    "pc4.h3": "视频剪辑", "pc4.sub": "仅后期，不含拍摄",
    "pc4.l1": "仅剪辑", "pc4.l2": "色彩调整", "pc4.l3": "动态效果 / 字幕",
    "btn.order": "立即预约", "btn.quote": "获取报价", "badge.popular": "热门",
    "note.monthly": "<b>长期合作：</b>每月制作8–20个内容时，可享受套餐优惠价格。",
    "footer.rights.media": "版权所有。",
    "footer.home.media": "返回首页",

    // uilchilgee.html
    "hero.h1.uilchilgee": "TB Plan — 服务",
    "hero.sub.uilchilgee": "网站开发、媒体制作 — 一支团队，一个方案。",
    "hero.btn.uilchilgee": "查看服务",
    "stat.services": "核心服务",
    "stat.onestop.u": "一站式解决方案",
    "stat.fast.num": "高效", "stat.fast.label": "规划 → 执行",
    "section.h2": "我们的服务",
    "section.p": "点击各服务类别可查看详细信息。",
    "svc.web.h3": "网站开发", "svc.web.p": "网站、落地页、系统、管理后台。",
    "svc.web.l1": "SEO + Analytics基础配置",
    "svc.web.l2": "表单 + 订单/消息",
    "svc.web.l3": "管理系统 / CRM",
    "svc.media.h3": "媒体制作", "svc.media.p": "Reels、广告、图片/视频剪辑。",
    "svc.media.l1": "内容规划", "svc.media.l2": "视频剪辑 + 调色",
    "svc.media.l3": "品牌视觉设计",
    "card.link.u": "查看价格 →",
    "pricing.h2.u": "报价方案",
    "pricing.p.u": "以下为基础价格，实际费用因工作量等因素而有所不同。",
    "pricing.web": "🌐 网站开发", "pricing.app": "📱 移动应用",
    "per.month": "月", "contract": "合同", "month": "月",
    "wstart.l1": "1–5页网站", "wstart.l2": "移动端 & 桌面端",
    "wstart.l3": "模板设计", "wstart.l4": "内容更新 (1–2次/月)",
    "wstart.l5": "域名 + 托管", "wstart.l6": "基础安全防护",
    "wstart.l7": "📌 合同期：6–12个月",
    "wstd.l1": "5–10页", "wstd.l2": "定制设计", "wstd.l3": "内容更新 (4次/月)",
    "wstd.l4": "SEO基础", "wstd.l5": "速度优化",
    "wstd.l6": "表单 / 订单系统", "wstd.l7": "📌 合同期：12个月",
    "wbiz.l1": "10+页 / 动态功能", "wbiz.l2": "管理后台",
    "wbiz.l3": "订单、消息系统", "wbiz.l4": "SEO + Google索引",
    "wbiz.l5": "备份 + 安全", "wbiz.l6": "优先技术支持",
    "wbiz.l7": "📌 合同期：12个月",
    "mvp.l1": "Android 或 iOS", "mvp.l2": "简洁UI/UX",
    "mvp.l3": "内容管理", "mvp.l4": "应用商店上架",
    "mvp.l5": "📌 合同期：12个月",
    "bapp.l1": "Android + iOS", "bapp.l2": "管理系统",
    "bapp.l3": "推送通知", "bapp.l4": "安全防护 + 备份",
    "bapp.l5": "📌 合同期：12–18个月",
    "nav.about.u": "关于我们", "nav.services.u": "服务",
    "nav.directions.u": "服务方向", "nav.details.u": "详细介绍",
    "nav.contact.u": "联系我们",

    // web.html
    "term.file": "终端 — tb-plan",
    "svc.h3": "// 服务项目",
    "svc.l1": "高性能企业网站",
    "svc.l2": "以销售为导向的落地页",
    "svc.l3": "管理后台、CRM系统",
    "svc.l4": "电商平台",
    "svc.l5": "定制化Web应用",
    "stack.h3": "// 技术栈",
    "footer.web": "© 2026 TB Plan — 纯代码，非模板。",

    serviceOptions: ["网站开发","室内设计","媒体制作","签证咨询","建筑材料","食品"],
    formSuccess: (n, s) => `谢谢您，${n}！我们已收到您关于"${s}"的申请，将尽快与您联系。`,

    terminal: [
      "$ npm install",
      "✔ 依赖包安装完成", "",
      "$ npm run build",
      "> tb-plan@1.0.0 build", "> next build", "",
      "✓ 编译成功",
      "✓ 代码检查完成",
      "✓ 静态页面生成完成", "",
      "🚀 构建在2.3秒内成功完成", "",
      "已准备好部署到生产环境。"
    ]
  }
};

// ===== Lang state (shared across all pages) =====
let lang = localStorage.getItem("tbLang") || "mn";

// Apply translations to all [data-i] elements
function applyLang() {
  const d = T[lang];

  document.querySelectorAll("[data-i]").forEach(el => {
    const k = el.getAttribute("data-i");
    if (d[k] !== undefined) el.innerHTML = d[k];
  });

  // Placeholders
  document.querySelectorAll(`[data-placeholder-${lang}]`).forEach(el => {
    el.placeholder = el.getAttribute(`data-placeholder-${lang}`);
  });

  // Service <select> options (contact form)
  const sel = document.getElementById("serviceSelect");
  if (sel && d.serviceOptions) {
    sel.innerHTML = "";
    d.serviceOptions.forEach(opt => {
      const o = document.createElement("option");
      o.textContent = opt;
      sel.appendChild(o);
    });
  }

  // Lightbox slide titles (data-title-mn / data-title-zh)
  document.querySelectorAll("[data-title-mn]").forEach(el => {
    const t = el.getAttribute(`data-title-${lang}`);
    if (t) el.setAttribute("data-title", t);
  });

  // Lang button UI
  const flagEl = document.getElementById("langFlag");
  const labelEl = document.getElementById("langLabel");
  if (flagEl) flagEl.textContent = lang === "mn" ? "🇨🇳" : "🇲🇳";
  if (labelEl) labelEl.textContent = lang === "mn" ? "中文" : "Монгол";

  document.documentElement.lang = lang === "zh" ? "zh" : "mn";
  document.title = lang === "zh"
    ? (document.title.includes("TB Plan") ? document.title.replace(/TB Plan.*/, "TB Plan | 综合服务") : document.title)
    : document.title;
}

// Lang toggle button
document.getElementById("langBtn")?.addEventListener("click", () => {
  lang = lang === "mn" ? "zh" : "mn";
  localStorage.setItem("tbLang", lang);
  applyLang();

  // If terminal page: restart typing with new lang
  if (typeof restartTerminal === "function") restartTerminal();
});

// ===== Year =====
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===== Mobile nav toggle =====
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle?.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navMenu?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    if (navMenu.classList.contains("is-open")) {
      navMenu.classList.remove("is-open");
      navToggle?.setAttribute("aria-expanded", "false");
    }
  });
});

// ===== Card background images =====
document.querySelectorAll(".card").forEach(card => {
  const img = card.getAttribute("data-img");
  if (img) card.style.setProperty("--bgimg", `url("${img}")`);
});

// ===== Detail slide backgrounds =====
document.querySelectorAll(".detail").forEach(sec => {
  const bg = sec.getAttribute("data-bg");
  if (bg) sec.style.setProperty("--detailbg", `url("${bg}")`);
});

// ===== Contact form =====
const contactForm = document.getElementById("contactForm");
const formHint = document.getElementById("formHint");

contactForm?.addEventListener("submit", e => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(contactForm).entries());
  const d = T[lang];
  if (formHint) {
    formHint.textContent = d.formSuccess(data.name, data.service);
    formHint.classList.add("is-visible");
  }
  contactForm.reset();
  setTimeout(() => formHint?.classList.remove("is-visible"), 6500);
});

// ===== Detail Slider =====
const track = document.getElementById("sliderTrack");
const prevBtn = document.getElementById("prevSlide");
const nextBtn = document.getElementById("nextSlide");
const dotsWrap = document.getElementById("sliderDots");

if (track && prevBtn && nextBtn && dotsWrap) {
  const slides = Array.from(track.querySelectorAll(".slide"));
  let index = 0;

  // Create dots
  dotsWrap.innerHTML = "";
  slides.forEach((_, i) => {
    const d = document.createElement("button");
    d.className = "sliderDot" + (i === 0 ? " is-active" : "");
    d.setAttribute("aria-label", `${i + 1}-р слайд`);
    d.addEventListener("click", () => goTo(i, true));
    dotsWrap.appendChild(d);
  });

  const dots = Array.from(dotsWrap.querySelectorAll(".sliderDot"));

  function triggerCinematic(activeSlide) {
    const inner = activeSlide.querySelector(".detail__inner");
    if (!inner) return;
    inner.style.animation = "none";
    void inner.offsetHeight;
    inner.style.animation = "";
  }

  function restartKenBurns() {
    const active = slides[index];
    slides.forEach(s => s.classList.remove("kb-restart"));
    void active.offsetHeight;
    active.classList.add("kb-restart");
  }

  function goTo(i, smoothScroll = false) {
    index = (i + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, di) => dot.classList.toggle("is-active", di === index));
    slides.forEach((s, si) => s.classList.toggle("is-active", si === index));
    triggerCinematic(slides[index]);
    restartKenBurns();

    const id = slides[index].id;
    if (id) history.replaceState(null, "", `#${id}`);

    if (smoothScroll) {
      document.getElementById("details")?.scrollIntoView({ behavior: "smooth" });
    }
  }

  // Autoplay
  let autoplayTimer = null;
  let isHovering = false;

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(() => {
      if (!isHovering) goTo(index + 1);
    }, 5000);
  }
  function stopAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
    autoplayTimer = null;
  }

  const sliderSection = document.getElementById("details");
  sliderSection?.addEventListener("mouseenter", () => (isHovering = true));
  sliderSection?.addEventListener("mouseleave", () => (isHovering = false));
  sliderSection?.addEventListener("touchstart", () => (isHovering = true), { passive: true });
  sliderSection?.addEventListener("touchend", () => (isHovering = false), { passive: true });

  document.addEventListener("visibilitychange", () => {
    document.hidden ? stopAutoplay() : startAutoplay();
  });

  prevBtn.addEventListener("click", () => { goTo(index - 1); startAutoplay(); });
  nextBtn.addEventListener("click", () => { goTo(index + 1); startAutoplay(); });
  dots.forEach(d => d.addEventListener("click", startAutoplay));

  // Keyboard
  window.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft") { goTo(index - 1); startAutoplay(); }
    if (e.key === "ArrowRight") { goTo(index + 1); startAutoplay(); }
  });

  // Swipe
  let startX = 0;
  let dragging = false;
  track.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX; dragging = true;
  }, { passive: true });
  track.addEventListener("touchend", e => {
    if (!dragging) return;
    const endX = e.changedTouches?.[0]?.clientX ?? startX;
    const diff = endX - startX;
    dragging = false;
    if (Math.abs(diff) > 45) { diff > 0 ? goTo(index - 1) : goTo(index + 1); }
  });

  // Hash navigation
  function hashToSlide() {
    const h = (location.hash || "").replace("#", "");
    if (!h) return;
    const targetIdx = slides.findIndex(s => s.id === h);
    if (targetIdx >= 0) goTo(targetIdx);
  }
  window.addEventListener("hashchange", hashToSlide);

  // Service card → slider link
  document.querySelectorAll("#services a.card[href^='#']").forEach(a => {
    a.addEventListener("click", e => {
      const hash = a.getAttribute("href");
      if (!hash) return;
      const targetIdx = slides.findIndex(s => s.id === hash.replace("#", ""));
      if (targetIdx >= 0) { e.preventDefault(); goTo(targetIdx, true); }
    });
  });

  // Init
  slides.forEach((s, si) => s.classList.toggle("is-active", si === index));
  hashToSlide();
  goTo(index);
  startAutoplay();
}

// ===== Detail bullet click → subpages =====
document.querySelectorAll("#web .detail__bullets li").forEach(li => {
  li.style.cursor = "pointer";
  li.addEventListener("click", e => {
    e.preventDefault(); e.stopPropagation();
    window.location.href = "web.html";
  });
});
document.querySelectorAll("#interior .detail__bullets li").forEach(li => {
  li.style.cursor = "pointer";
  li.addEventListener("click", e => {
    e.preventDefault(); e.stopPropagation();
    window.location.href = "design.html";
  });
});

// ===== Materials detail → Facebook =====
document.getElementById("materials-detail")?.addEventListener("click", () => {
  window.location.href = "https://www.facebook.com/profile.php?id=61558823942296";
});

// ===== Topbar scroll shadow =====
const topbar = document.getElementById("top");
if (topbar) {
  window.addEventListener("scroll", () => {
    topbar.classList.toggle("is-scrolled", window.scrollY > 20);
  }, { passive: true });
}

// ===== Scroll reveal =====
const reveals = document.querySelectorAll(".reveal");
if (reveals.length) {
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  reveals.forEach(el => revealObs.observe(el));
}

// ===== media.html: chip scroll =====
document.querySelectorAll("[data-scroll]").forEach(btn => {
  btn.addEventListener("click", () => {
    const sel = btn.getAttribute("data-scroll");
    if (sel) document.querySelector(sel)?.scrollIntoView({ behavior: "smooth" });
  });
});

// ===== media.html: video modal =====
const modal = document.getElementById("modal");
const modalVideo = document.getElementById("modalVideo");
const modalClose = document.getElementById("modalClose");

if (modal && modalVideo) {
  const reels = Array.from(document.querySelectorAll("video.reel"));
  let currentInline = null;

  function pauseAllInline(except) {
    reels.forEach(v => { if (v !== except) try { v.pause(); } catch(_) {} });
  }
  function playInline(video) {
    if (!video) return;
    pauseAllInline(video);
    currentInline = video;
    video.muted = true;
    const p = video.play();
    if (p?.catch) p.catch(() => {});
  }

  const io = new IntersectionObserver(entries => {
    const visible = entries
      .filter(e => e.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible?.target) playInline(visible.target);
    else { pauseAllInline(null); currentInline = null; }
  }, { threshold: [.25, .5, .75, .9] });
  reels.forEach(v => io.observe(v));

  function openModal(src) {
    pauseAllInline(null);
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    modalVideo.src = src;
    modalVideo.currentTime = 0;
    modalVideo.muted = false;
    const p = modalVideo.play();
    if (p?.catch) p.catch(() => {});
  }
  function closeModal() {
    if (!modal.classList.contains("is-open")) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    try { modalVideo.pause(); modalVideo.removeAttribute("src"); modalVideo.load(); } catch(_) {}
  }

  modalClose?.addEventListener("click", e => { e.preventDefault(); e.stopPropagation(); closeModal(); });
  modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
  window.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

  document.querySelectorAll(".vFrame[data-modal-src]").forEach(frame => {
    const src = frame.getAttribute("data-modal-src");
    frame.addEventListener("click", () => openModal(src));
    frame.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openModal(src); }
    });
  });
}

// ===== design.html / index.html: Lightbox =====
const lb = document.getElementById("lb");
const lbImg = document.getElementById("lbImg");
const lbTitle = document.getElementById("lbTitle");
const lbPrev = document.getElementById("lbPrev");
const lbNext = document.getElementById("lbNext");
const lbClose = document.getElementById("lbClose");
const shots = Array.from(document.querySelectorAll(".shot"));

if (lb && shots.length) {
  let currentLbIndex = 0;
  function openLB(i) {
    currentLbIndex = i;
    const s = shots[currentLbIndex];
    const img = s.querySelector("img");
    if (lbImg) { lbImg.src = img?.src || ""; lbImg.alt = img?.alt || ""; }
    if (lbTitle) lbTitle.textContent = s.getAttribute("data-title") || "";
    lb.classList.add("is-open");
    lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function closeLB() {
    lb.classList.remove("is-open");
    lb.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
  function stepLB(dir) { openLB((currentLbIndex + dir + shots.length) % shots.length); }

  shots.forEach((s, i) => s.addEventListener("click", () => openLB(i)));
  lbClose?.addEventListener("click", closeLB);
  lbPrev?.addEventListener("click", () => stepLB(-1));
  lbNext?.addEventListener("click", () => stepLB(1));
  lb.addEventListener("click", e => { if (e.target === lb) closeLB(); });
  window.addEventListener("keydown", e => {
    if (!lb.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLB();
    if (e.key === "ArrowLeft") stepLB(-1);
    if (e.key === "ArrowRight") stepLB(1);
  });
}

// ===== design.html / index.html: Mobile dots =====
const dotLinks = Array.from(document.querySelectorAll(".dotLink"));
if (dotLinks.length) {
  const dotSections = ["office","furniture","execution","coffeeshop","childroom"]
    .map(id => document.getElementById(id));
  function onDotScroll() {
    const y = window.scrollY + 140;
    let active = 0;
    dotSections.forEach((sec, i) => { if (!sec) return; if (sec.offsetTop <= y) active = i; });
    dotLinks.forEach((d, i) => d.classList.toggle("is-active", i === active));
  }
  window.addEventListener("scroll", onDotScroll, { passive: true });
  onDotScroll();
}

// ===== web.html: Custom cursor =====
const cursor = document.getElementById("cursor");
if (cursor) {
  window.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });
}

// ===== web.html: Terminal typing =====
const terminalEl = document.getElementById("terminal");
let tLine = 0, tChar = 0, typingTimer = null;

function type() {
  if (!terminalEl) return;
  const script = T[lang].terminal;
  if (tLine >= script.length) {
    terminalEl.innerHTML += "<span class='blink'> </span>";
    return;
  }
  if (tChar < script[tLine].length) {
    terminalEl.innerHTML += script[tLine].charAt(tChar);
    tChar++;
  } else {
    terminalEl.innerHTML += "\n";
    tLine++; tChar = 0;
  }
  typingTimer = setTimeout(type, 22);
}

function restartTerminal() {
  if (!terminalEl) return;
  if (typingTimer) clearTimeout(typingTimer);
  terminalEl.innerHTML = "";
  tLine = 0; tChar = 0;
  type();
}

if (terminalEl) type();

// ===== Init lang on page load =====
applyLang();
