/*
 * Portfolio application
 * ---------------------
 * This is the only JavaScript file in the project.
 *
 * Main responsibilities:
 * 1. Store editable portfolio data.
 * 2. Persist theme/language/intro preferences.
 * 3. Render dynamic resume sections.
 * 4. Control the hero <-> resume transition.
 * 5. Run the typed-title and intro animations.
 *
 * Edit the DATA object first when you want to change portfolio content.
 */

(() => {
  "use strict";

  // ============================================================
  // DATA — Keep editable portfolio content in one place.
  // ============================================================
  const DATA = {
    person: {
      name: {
        en: "Abolfazl Pourmohabbat",
        fa: "ابوالفضل پورمحبت",
      },
      title: {
        en: "Front-end Developer",
        fa: "برنامه‌نویس فرانت‌اند",
      },
      titlePrefix: {
        en: "I'm a ",
        fa: " یک",
      },
      greeting: {
        en: "Hello, I'm",
        fa: "درود، من",
      },
      status: {
        en: "Available for work",
        fa: "آماده همکاری",
      },
      bio: {
        en: `I'm Abolfazl Pourmohabbat, a Front-end Developer.
I don't believe experience is measured only by the number of years you've been coding.
What matters is what you can build, how you solve problems, and how quickly you turn ideas into working solutions.
So, instead of asking you to simply trust me, take a look at my work and see what I can do.`,
        fa: `من ابوالفضل پورمحبّت هستم، یک توسعه‌دهنده‌ی Front-end.
من باور ندارم که تجربه فقط با تعداد سال‌هایی که برنامه‌نویسی کرده‌ایم سنجیده می‌شود. چیزی که اهمیت دارد این است که چه چیزی می‌توانی بسازی، چطور مسائل را حل می‌کنی و با چه سرعتی ایده‌ها را به راهکارهای واقعی و قابل اجرا تبدیل می‌کنی.
بنابراین، به‌جای اینکه فقط از شما بخواهم به من اعتماد کنید، ترجیح می‌دهم نگاهی به کارهایم بیندازید و خودتان ببینید چه توانایی‌هایی دارم.`,
      },
      location: {
        en: "Tehran, Iran",
        fa: "تهران، ایران",
      },
      email: "test@test.com",
      statusValue: {
        en: "Open to opportunities",
        fa: "آماده همکاری",
      },
    },

    social: {
      github: { url: "", label: "GitHub" },
      linkedin: {
        url: "https://www.linkedin.com/in/abolfazl-pourmohabbat/",
        label: "LinkedIn",
      },
      telegram: { url: "https://t.me/your-telegram", label: "Telegram" },
      instagram: {
        url: "https://instagram.com/your-instagram",
        label: "Instagram",
      },
    },

    skills: [
      {
        icon: "🌐",
        name: {
          en: "HTML5 & Semantic Markup",
          fa: "HTML5 و نشانه‌گذاری معنایی",
        },
        level: 95,
      },
      {
        icon: "🎨",
        name: { en: "CSS3 & Responsive Design", fa: "CSS3 و طراحی ریسپانسیو" },
        level: 95,
      },
      {
        icon: "⚡",
        name: { en: "JavaScript (ES6+)", fa: "جاوااسکریپت (ES6+)" },
        level: 80,
      },
      {
        icon: "🌀",
        name: { en: "TailwindCSS", fa: "تیلویند سی‌اس‌اس" },
        level: 95,
      },
      // {
      //   icon: "⚛️",
      //   name: { en: "React (Basics)", fa: "ری‌اکت (مقدماتی)" },
      //   level: 75,
      // },
      // {
      //   icon: "📦",
      //   name: { en: "Git & GitHub", fa: "گیت و گیت‌هاب" },
      //   level: 80,
      // },
    ],

    experience: [
      {
        date: { en: "2026 — Present", fa: "۱۴۰5 — تا امروز" },
        title: {
          en: "Freelance Front-end Developer",
          fa: "برنامه‌نویس فرانت‌اند آزادکار",
        },
        company: { en: "Self-employed", fa: "کار آزاد" },
        description: {
          en: "Building modern, responsive, and accessible web experiences for clients. Focus on performance, clean code, and delightful interactions.",
          fa: "ساخت پروژه های وب مدرن، ریسپانسیو و قابل دسترس برای مشتریان. تمرکز بر عملکرد، کد تمیز و تعامل دلنشین.",
        },
      },
      {
        date: { en: "2026", fa: "۱۴۰5" },
        title: { en: "Junior Web Developer", fa: "برنامه‌نویس وب جونیور" },
        company: {
          en: "Personal Projects & Practice",
          fa: "پروژه‌های شخصی و تمرین",
        },
        description: {
          en: "Built multiple small projects to master HTML, CSS, and JavaScript fundamentals. Explored modern UI patterns and accessibility.",
          fa: "ساخت چندین پروژه کوچک برای تسلط بر اصول HTML، CSS و جاوااسکریپت. کاوش در الگوهای مدرن UI و دسترسی‌پذیری.",
        },
      },
    ],

    education: [
      {
        date: { en: "Ongoing", fa: "در حال تحصیل" },
        title: {
          en: "Self-taught Front-end Path",
          fa: "مسیر خودآموز فرانت‌اند",
        },
        company: {
          en: "Online courses & practice",
          fa: "دوره‌های آنلاین و تمرین",
        },
        description: {
          en: "Continuous learning through freeCodeCamp, Frontend Mentor, MDN, and real client projects.",
          fa: "یادگیری مستمر از طریق freeCodeCamp، Frontend Mentor، MDN و پروژه‌های واقعی مشتری.",
        },
      },
    ],

    projects: [
      {
        title: {
          en: "Bakery & Café Website",
          fa: "وب‌سایت نانوایی و کافه",
        },
        description: {
          en: "A modern bakery and café website showcasing fresh pastries, breads, desserts, and café offerings through a clean and inviting user experience.",
          fa: "وب‌سایتی مدرن برای معرفی نان‌های تازه، شیرینی‌ها، دسرها و محصولات کافه با طراحی تمیز و تجربه کاربری جذاب.",
        },
        stack: ["HTML", "Tailwind CSS", "JavaScript"],
        image: "/assets/images/thereal-bakery.webp",
        url: "https://therealbakery.vercel.app/",
        live: "#",
        repo: "#",
      },
      {
        title: {
          en: "Feedback Management Platform",
          fa: "پلتفرم مدیریت بازخورد",
        },
        description: {
          en: "A modern platform for collecting, organizing, and analyzing customer feedback through a clean and intuitive interface.",
          fa: "پلتفرمی مدرن برای جمع‌آوری، سازمان‌دهی و تحلیل بازخورد مشتریان با رابط کاربری تمیز و کاربرپسند.",
        },
        stack: ["HTML", "Tailwind CSS", "JavaScript", "REST API", "SPA"],
        image: "/assets/images/feedback-core.webp",
        url: "https://feedbackcore.vercel.app/",
        live: "#",
        repo: "#",
      },
      {
        title: { en: "Image Search & Gallery", fa: "گالری و جستجوی تصاویر" },
        description: {
          en: "A modern JavaScript image search application that allows users to quickly discover, browse, and download images through a clean and responsive interface.",
          fa: "یک اپلیکیشن مدرن مبتنی بر JavaScript برای جستجو، مشاهده و دانلود سریع تصاویر با رابط کاربری تمیز و ریسپانسیو.",
        },
        stack: ["HTML", "CSS", "JavaScript", "REST API"],
        image: "/assets/images/image-gallery.webp",
        url: "https://ap-galleryimage.vercel.app/",
        live: "#",
        repo: "#",
      },
      {
        title: { en: "Order Calculator", fa: "محاسبه‌گر سفارش" },
        description: {
          en: "A JavaScript-based tool for configuring products, quantities, taxes, shipping, and estimated order totals.",
          fa: "یک ابزار مدیریت و محاسبه سفارش مبتنی بر JavaScript که امکان انتخاب محصولات، تعیین تعداد، اعمال مالیات و هزینه ارسال و محاسبه مبلغ نهایی سفارش را فراهم می‌کند.",
        },
        stack: ["HTML", "CSS", "JavaScript"],
        image: "/assets/images/factor.webp",
        url: "https://ap-factor.vercel.app/",
        live: "#",
        repo: "#",
      },
      {
        title: { en: "Travel Website", fa: "وب‌سایت گردشگری" },
        description: {
          en: "A responsive travel website built with HTML, CSS, and JavaScript, featuring destination-focused sections, intuitive navigation, and an immersive visual experience.",
          fa: "یک وب‌سایت ریسپانسیو گردشگری ساخته‌شده با HTML، CSS و JavaScript که با تمرکز بر معرفی مقصدهای گردشگری، ناوبری ساده و طراحی بصری جذاب، تجربه‌ای مناسب برای کاربران فراهم می‌کند.",
        },
        stack: ["HTML", "CSS", "JavaScript"],
        image: "/assets/images/travelo.webp",
        url: "https://ap-travelo.vercel.app/",
        live: "#",
        repo: "#",
      },
    ],

    i18n: {
      en: {
        "meta.title": "Abolfazl Pourmohabbat | Front-end Developer (Tailwind Css/Angular)",
        "meta.description":
          "Abolfazl Pourmohabbat — Front-end Developer. Crafting performant, accessible, and beautiful web experiences.",
        "brand.mark": "AP",
        "brand.name": "Abolfazl",
        "control.lang": "FA",
        "hero.status": "Available for work",
        "hero.greeting": "Hello, I'm",
        "hero.name": "Abolfazl Pourmohabbat",
        "hero.titlePrefix": "I'm a ",
        "hero.title": "Front-end Developer",
        "hero.bio":
          "I build fast, responsive, and polished web experiences with a strong focus on clean code and pixel-perfect design.",
        "hero.cta": "View Resume",
        "resume.close": "Close Resume",
        "section.about": "About",
        "section.skills": "Skills",
        "section.experience": "Experience",
        "section.education": "Education",
        "section.projects": "Projects",
        "section.contact": "Contact",
        "about.text": `I'm Abolfazl Pourmohabbat, a Front-end Developer.
I don't believe experience is measured only by the number of years you've been coding. What matters is what you can build, how you solve problems, and how quickly you turn ideas into working solutions.
So, instead of asking you to simply trust me, take a look at my work and see what I can do.`,
        "about.location": "Location",
        "about.email": "Email",
        "about.status": "Status",
        "about.locationValue": "Tehran, Iran",
        "about.statusValue": "Open to opportunities",
        "contact.text": `Have an idea, a project, or an opportunity in mind?
Let's talk. Reach out through any of the channels below and let's see what we can build together.`,
        "contact.email": "Email",
        "download.text": "Want a printable copy of my resume?",
        "download.btn": "Download PDF",
        "footer.made": "Crafted with care by",
        "footer.year": "2026",
      },
      fa: {
        "meta.title": "ابوالفضل پورمحبت — برنامه‌نویس فرانت‌اند",
        "meta.description":
          "ابوالفضل پورمحبت — برنامه‌نویس فرانت‌اند. ساخت تجربه‌های وب با کارایی بالا، قابل دسترس و زیبا.",
        "brand.mark": "پ",
        "brand.name": "ابوالفضل",
        "control.lang": "EN",
        "hero.status": "آماده همکاری",
        "hero.greeting": "درود، من",
        "hero.name": "ابوالفضل پورمحبت",
        "hero.titlePrefix": "یک ",
        "hero.title": "برنامه‌نویس فرانت‌اند",
        "hero.bio":
          "من تجربه‌های وب سریع، ریسپانسیو و حرفه‌ای می‌سازم؛ با تمرکز ویژه بر کدنویسی تمیز و طراحی پیکسل‌پرفکت.",
        "hero.cta": "نمایش رزومه",
        "resume.close": "بستن رزومه",
        "section.about": "درباره من",
        "section.skills": "مهارت‌ها",
        "section.experience": "تجربه کاری",
        "section.education": "تحصیلات",
        "section.projects": "نمونه‌کارها",
        "section.contact": "تماس",
        "about.text": `من ابوالفضل پورمحبّت هستم، یک توسعه‌دهنده‌ی Front-end.
من باور دارم که تجربه فقط با تعداد سال‌هایی که برنامه‌نویسی کردیم سنجیده نمیشه.
چیزی که اهمیت داره اینکه چی می‌تونی بسازی، چطور مسائل رو حل میکنی و با چه سرعتی ایده‌ها رو به پروژه های واقعی و قابل اجرا تبدیل میکنی.
پس، به‌جای اینکه فقط از شما بخوام به من اعتماد کنید، ترجیح میدم اول نگاهی به کارهام بندازید و خودتون ببینید چه کارهایی از من برمیاد.`,
        "about.location": "موقعیت",
        "about.email": "ایمیل",
        "about.status": "وضعیت",
        "about.locationValue": "تهران، ایران",
        "about.statusValue": "آماده همکاری",
        "contact.text": `ایده، پروژه یا فرصت همکاری‌ای در ذهن دارید؟
بیایید درباره‌اش صحبت کنیم. از طریق راه‌های ارتباطی زیر با من در تماس باشید تا ببینیم با هم چه چیزی می‌توانیم بسازیم.`,
        "contact.email": "ایمیل",
        "download.text": "نسخه چاپی رزومه رو می‌خوای؟",
        "download.btn": "دانلود PDF",
        "footer.made": "ساخته شده با دقت توسط",
        "footer.year": "۱۴۰۵",
      },
    },

    resumePdf: {
      "dark-red": "./assets/pdf/resume-dark-red.pdf",
      "cyan-white": "./assets/pdf/resume-cyan-white.pdf",
    },
  };

  // ============================================================
  // DOM helpers
  // ============================================================
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [
    ...root.querySelectorAll(selector),
  ];

  // ============================================================
  // Storage — IndexedDB with localStorage fallback.
  // ============================================================
  const Storage = (() => {
    const DB_NAME = "portfolio-prefs";
    const STORE_NAME = "prefs";
    const DB_VERSION = 1;
    let dbPromise;

    const canUseIndexedDB = () => {
      try {
        return "indexedDB" in window && window.indexedDB !== null;
      } catch {
        return false;
      }
    };

    const openDB = () => {
      if (!canUseIndexedDB())
        return Promise.reject(new Error("IndexedDB unavailable"));
      if (dbPromise) return dbPromise;

      dbPromise = new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);
        request.onupgradeneeded = ({ target }) => {
          const db = target.result;
          if (!db.objectStoreNames.contains(STORE_NAME)) {
            db.createObjectStore(STORE_NAME, { keyPath: "key" });
          }
        };
        request.onsuccess = ({ target }) => resolve(target.result);
        request.onerror = () =>
          reject(request.error ?? new Error("IndexedDB open failed"));
      });

      return dbPromise;
    };

    const get = async (key, fallback = null) => {
      try {
        const db = await openDB();
        return await new Promise((resolve, reject) => {
          const request = db
            .transaction(STORE_NAME, "readonly")
            .objectStore(STORE_NAME)
            .get(key);
          request.onsuccess = () => resolve(request.result?.value ?? fallback);
          request.onerror = () => reject(request.error);
        });
      } catch {
        return localStorage.getItem(`pf_${key}`) ?? fallback;
      }
    };

    const set = async (key, value) => {
      try {
        const db = await openDB();
        await new Promise((resolve, reject) => {
          const request = db
            .transaction(STORE_NAME, "readwrite")
            .objectStore(STORE_NAME)
            .put({ key, value });
          request.onsuccess = resolve;
          request.onerror = () => reject(request.error);
        });
      } catch {
        localStorage.setItem(`pf_${key}`, value);
      }
      return value;
    };

    return { get, set };
  })();

  // ============================================================
  // Theme
  // ============================================================
  const Theme = (() => {
    const DEFAULT = "dark-red";
    const VALID = new Set(["dark-red", "cyan-white"]);

    const apply = (theme) => {
      const next = VALID.has(theme) ? theme : DEFAULT;
      document.documentElement.dataset.theme = next;
      $("#downloadResumeBtn")?.setAttribute("href", DATA.resumePdf[next]);
      $("meta[name='theme-color']")?.setAttribute(
        "content",
        next === "dark-red" ? "#0a0a0c" : "#f5fbfd",
      );
      return next;
    };

    const init = async () => apply(await Storage.get("theme", DEFAULT));

    const toggle = async () => {
      const next =
        document.documentElement.dataset.theme === "dark-red"
          ? "cyan-white"
          : "dark-red";
      apply(next);
      await Storage.set("theme", next);
    };

    return { init, apply, toggle };
  })();

  // ============================================================
  // Language
  // ============================================================
  const Language = (() => {
    const DEFAULT = "en";
    const VALID = new Set(["en", "fa"]);
    let current = DEFAULT;

    const toPersianYear = () =>
      new Intl.DateTimeFormat("fa-IR-u-ca-persian", { year: "numeric" }).format(
        new Date(),
      );

    const updateSocialLinks = () => {
      Object.entries(DATA.social).forEach(([key, social]) => {
        const element = $(`.hero-social-link[data-social="${key}"]`);
        element?.setAttribute("href", social.url);
      });
    };

    const apply = (lang) => {
      current = VALID.has(lang) ? lang : DEFAULT;
      const dictionary = DATA.i18n[current];
      document.documentElement.lang = current;
      document.documentElement.dir = current === "fa" ? "rtl" : "ltr";
      document.documentElement.dataset.lang = current;

      $$(`[data-i18n]`).forEach((element) => {
        const key = element.dataset.i18n;
        const value = dictionary[key];

        if (value === undefined) return;

        if (element.tagName === "META") {
          element.content = value;
        } else if (key === "about.text" || key === "contact.text") {
          element.innerHTML = value.replace(/\n/g, "<br>");
        } else {
          element.textContent = value;
        }
      });

      updateSocialLinks();
      $("#footerYear").textContent =
        current === "fa" ? toPersianYear() : String(new Date().getFullYear());
      renderDynamicSections();
      TypedTitle.restart();
    };

    const init = async () => apply(await Storage.get("lang", DEFAULT));

    const toggle = async () => {
      const next = current === "en" ? "fa" : "en";
      apply(next);
      await Storage.set("lang", next);
    };

    return { init, apply, toggle, get: () => current };
  })();

  // ============================================================
  // Dynamic rendering
  // ============================================================
  const cardClasses =
    "rounded-2xl border border-[var(--c-border)] bg-[var(--c-surface)] p-5 shadow-[var(--shadow-sm)] transition duration-300 hover:-translate-y-1 hover:border-[var(--c-accent)] hover:shadow-[var(--shadow-md)]";

  const renderSkills = () => {
    const list = $("#skillsList");
    if (!list) return;
    const lang = Language.get();

    list.innerHTML = DATA.skills
      .map(
        (skill) => `
      <article class="${cardClasses}">
        <div class="mb-4 flex items-center justify-between gap-4">
          <div class="flex items-center gap-3 font-semibold">
            <span class="text-xl" aria-hidden="true">${skill.icon}</span>
            <span>${skill.name[lang]}</span>
          </div>
          <span class="text-sm font-bold text-(--c-accent)">${skill.level}%</span>
        </div>
        <div class="h-2 overflow-hidden rounded-full bg-(--c-bg-2)">
          <div class="h-full rounded-full bg-(--c-accent) transition-[width] duration-700" style="width:${skill.level}%"></div>
        </div>
      </article>
    `,
      )
      .join("");
  };

  const renderTimeline = (id, items) => {
    const list = $(id);
    if (!list) return;
    const lang = Language.get();

    list.innerHTML = items
      .map(
        (item) => `
      <article class="timeline-card relative rounded-2xl border border-(--c-border) bg-(--c-surface) p-5 transition duration-300 hover:-translate-x-1 hover:border-(--c-accent)">
        <p class="mb-1 text-xs font-semibold tracking-wider text-(--c-accent)">${item.date[lang]}</p>
        <h3 class="mb-1 text-lg font-bold">${item.title[lang]}</h3>
        <p class="mb-2 text-sm font-medium text-(--c-text-soft)">${item.company[lang]}</p>
        <p class="text-sm leading-7 text-(--c-text-soft)">${item.description[lang]}</p>
      </article>
    `,
      )
      .join("");
  };

  const renderProjects = () => {
    const list = $("#projectsList");
    if (!list) return;
    const lang = Language.get();

    list.innerHTML = DATA.projects
      .map((project) => {
        const links = [
          project.live && project.live !== "#"
            ? `<a href="${project.live}" target="_blank" rel="noopener" class="inline-flex items-center gap-1 rounded-full border border-(--c-border) bg-(--c-bg-2) px-3 py-1.5 text-xs font-semibold transition hover:-translate-y-0.5 hover:border-(--c-accent) hover:bg-(--c-accent) hover:text-(--c-accent-contrast)">↗ Live</a>`
            : "",
          project.repo && project.repo !== "#"
            ? `<a href="${project.repo}" target="_blank" rel="noopener" class="inline-flex items-center gap-1 rounded-full border border-(--c-border) bg-(--c-bg-2) px-3 py-1.5 text-xs font-semibold transition hover:-translate-y-0.5 hover:border-(--c-accent) hover:bg-(--c-accent) hover:text-(--c-accent-contrast)">⌨ Code</a>`
            : "",
        ].join("");

        return `
        <article class="group flex flex-col overflow-hidden rounded-[18px] border border-(--c-border) bg-(--c-surface) transition duration-300 hover:-translate-y-1 hover:border-(--c-accent) hover:shadow-(--shadow-lg)">
          <a href='${project.url}' target="_blank" class="aspect-video w-full overflow-hidden bg-(--c-bg-2)">
            <img src="${project.image}" alt="${project.title[lang]}" loading="lazy" class="size-full object-cover transition duration-500 group-hover:scale-[1.06]">
          </a>
          <div class="flex flex-1 flex-col gap-2.5 p-5">
            <h3 class="text-lg font-bold">${project.title[lang]}</h3>
            <p class="text-sm leading-7 text-(--c-text-soft)">${project.description[lang]}</p>
            <div class="mt-auto flex flex-wrap gap-1.5 pt-2">
              ${project.stack.map((tag) => `<span class="rounded-full border border-(--c-border) bg-(--c-bg-2) px-2.5 py-1 text-[.72rem] font-semibold text-(--c-accent)">${tag}</span>`).join("")}
            </div>
            ${links ? `<div class="mt-1 flex gap-2">${links}</div>` : ""}
          </div>
        </article>
      `;
      })
      .join("");
  };

  function renderDynamicSections() {
    renderSkills();
    renderTimeline("#experienceList", DATA.experience);
    renderTimeline("#educationList", DATA.education);
    renderProjects();
  }

  // ============================================================
  // Typed title animation
  // ============================================================
  const TypedTitle = (() => {
    const WORDS = {
      en: [
        " Front-end Developer",
        " Pixel Perfectionist",
        " Problem Solver",
        " Clean Coder",
      ],
      fa: ["برنامه‌نویس فرانت‌اند "],
    };

    let timer = null;
    let runId = 0;

    const restart = () => {
      const element = $("#typedTitle");
      if (!element) return;

      runId += 1;
      const currentRun = runId;
      clearTimeout(timer);

      let wordIndex = 0;
      let charIndex = 0;
      let deleting = false;

      const tick = () => {
        if (currentRun !== runId) return;
        const words = WORDS[Language.get()] ?? WORDS.en;
        const word = words[wordIndex];

        if (!deleting) {
          charIndex += 1;
          element.textContent = word.slice(0, charIndex);
          if (charIndex === word.length) {
            deleting = true;
            timer = setTimeout(tick, 1800);
            return;
          }
          timer = setTimeout(tick, 80);
          return;
        }

        charIndex -= 1;
        element.textContent = word.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          timer = setTimeout(tick, 400);
          return;
        }
        timer = setTimeout(tick, 40);
      };

      timer = setTimeout(tick, 500);
    };

    return { restart };
  })();

  // ============================================================
  // Intro animation
  // ============================================================
  const Intro = {
    async play() {
      const intro = $("#intro");
      if (!intro) return;
      intro.classList.remove("hidden");
      await new Promise((resolve) => setTimeout(resolve, 2700));
      intro.classList.add("hidden");
    },
  };

  // ============================================================
  // Resume navigation
  // ============================================================
  const Resume = (() => {
    const section = $("#resume");
    const home = $("#home");
    const topbar = $("#topbar");
    const floating = $("#floating");
    const footer = $("#footer");

    const open = () => {
      document.body.dataset.state = "resume-open";
      section.setAttribute("aria-hidden", "false");
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const close = () => {
      document.body.dataset.state = "hero";

      section.setAttribute("aria-hidden", "true");

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    const backToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    // Keep references alive for readability/debugging when inspecting the app.
    return { open, close, backToTop, home, section, topbar, floating, footer };
  })();

  // ============================================================
  // Event wiring
  // ============================================================
  function wireEvents() {
    $("#themeToggle")?.addEventListener("click", Theme.toggle);
    $("#langToggle")?.addEventListener("click", Language.toggle);
    $("#viewResumeBtn")?.addEventListener("click", Resume.open);
    $("#closeResumeBtn")?.addEventListener("click", Resume.close);
    $("#floatingClose")?.addEventListener("click", Resume.close);
    $("#backToTop")?.addEventListener("click", Resume.backToTop);

    // Escape is a convenient keyboard shortcut for returning to the hero.
    document.addEventListener("keydown", (event) => {
      if (
        event.key === "Escape" &&
        document.body.dataset.state === "resume-open"
      ) {
        Resume.close();
      }
    });
  }

  // ============================================================
  // Boot
  // ============================================================
  async function boot() {
    // Start in the hero state before reading user preferences.
    document.body.dataset.state = "hero";

    // Wait for preferences instead of using arbitrary setTimeout calls.
    await Promise.all([Theme.init(), Language.init()]);

    renderDynamicSections();
    TypedTitle.restart();
    wireEvents();

    const introSeen = await Storage.get("intro-seen", "false");
    if (introSeen !== "true") {
      await Intro.play();
      await Storage.set("intro-seen", "true");
    } else {
      $("#intro")?.classList.add("hidden");
    }

    document.body.classList.remove("page--loading");
  }

  boot().catch((error) => {
    console.error("Portfolio boot failed:", error);
    document.body.classList.remove("page--loading");
  });
})();
