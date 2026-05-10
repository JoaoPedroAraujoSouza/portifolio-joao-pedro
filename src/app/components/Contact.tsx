import { Mail, Linkedin, Github, Instagram, MapPin, ArrowUpRight, Send } from "lucide-react";
import { motion } from "motion/react";
import { usePortfolio } from "../context/PortfolioContext";
import { translations } from "../data/translations";

export function Contact() {
  const { lang } = usePortfolio();
  const t = translations[lang].contact;

  const links = [
    {
      icon: Mail,
      label: t.email_label,
      value: "joaopedroaraujosouzadev@gmail.com",
      href: "mailto:joaopedroaraujosouzadev@gmail.com",
      gradient: "from-red-500 to-rose-600",
      glow: "hover:shadow-red-500/20",
      ring: "hover:border-red-200 dark:hover:border-red-900/50",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "joao-pedro-araujo-souza",
      href: "https://linkedin.com/in/joao-pedro-araujo-souza",
      gradient: "from-blue-500 to-blue-600",
      glow: "hover:shadow-blue-500/20",
      ring: "hover:border-blue-200 dark:hover:border-blue-900/50",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "JoaoPedroAraujoSouza",
      href: "https://github.com/JoaoPedroAraujoSouza",
      gradient: "from-gray-600 to-gray-800",
      glow: "hover:shadow-gray-500/20",
      ring: "hover:border-gray-300 dark:hover:border-gray-600",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@dev.joaopedroarj",
      href: "https://www.instagram.com/dev.joaopedroarj/",
      gradient: "from-pink-500 via-rose-500 to-orange-400",
      glow: "hover:shadow-pink-500/20",
      ring: "hover:border-pink-200 dark:hover:border-pink-900/50",
    },
    {
      icon: MapPin,
      label: t.location_label,
      value: "Cabo de Santo Agostinho, PE — Brasil",
      href: null,
      gradient: "from-teal-500 to-cyan-600",
      glow: "hover:shadow-teal-500/20",
      ring: "hover:border-teal-200 dark:hover:border-teal-900/50",
    },
  ];

  return (
    <section id="contact" className="py-28 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
      {/* Watermark number */}
      <span
        className="absolute -top-6 left-4 text-[10rem] font-black select-none pointer-events-none leading-none"
        style={{ color: "rgba(99,102,241,0.07)" }}
      >
        05
      </span>
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.14) 0%, transparent 70%)" }} />
        <div className="absolute top-0 left-0 w-72 h-72 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">
            {t.subtitle}
          </p>
          <div className="section-line" />
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-4">
            {t.title}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-sm mx-auto">
            {t.description}
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 gap-3 mb-10">
          {links.map((item, i) => {
            const Icon = item.icon;
            const card = (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, type: "spring", stiffness: 200 }}
                whileHover={item.href ? { y: -3, scale: 1.01 } : {}}
                className={`flex items-center gap-4 p-4 bg-white dark:bg-gray-800/60 rounded-2xl border border-gray-100 dark:border-gray-700/50 shadow-sm ${item.href ? `hover:shadow-xl ${item.glow} ${item.ring} cursor-pointer` : ""} transition-all group`}
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 shadow-md text-white group-hover:scale-110 transition-transform`}>
                  <Icon size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] text-gray-400 dark:text-gray-500 mb-0.5 font-semibold uppercase tracking-widest">{item.label}</p>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 truncate">
                    {item.value}
                  </p>
                </div>
                {item.href && (
                  <ArrowUpRight size={16} className="text-gray-300 dark:text-gray-600 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors flex-shrink-0" />
                )}
              </motion.div>
            );

            return item.href ? (
              <a key={item.label} href={item.href} target={item.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer">
                {card}
              </a>
            ) : (
              <div key={item.label}>{card}</div>
            );
          })}
        </div>

        {/* Email CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
        >
          <a
            href="mailto:joaopedroaraujosouzadev@gmail.com"
            className="shimmer inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white rounded-2xl font-bold transition-all hover:shadow-2xl hover:shadow-indigo-500/30 hover:-translate-y-1 text-sm"
          >
            <Send size={16} />
            {t.send_email}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
