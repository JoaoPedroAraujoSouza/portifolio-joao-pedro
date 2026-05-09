import { Mail, Linkedin, Github, Instagram, MapPin, ArrowUpRight } from "lucide-react";
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
      color: "bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400",
      border: "border-red-100 dark:border-red-900/30",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "joao-pedro-araujo-souza",
      href: "https://linkedin.com/in/joao-pedro-araujo-souza",
      color: "bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400",
      border: "border-blue-100 dark:border-blue-900/30",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "JoaoPedroAraujoSouza",
      href: "https://github.com/JoaoPedroAraujoSouza",
      color: "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300",
      border: "border-gray-200 dark:border-gray-700",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@dev.joaopedroarj",
      href: "https://www.instagram.com/dev.joaopedroarj/",
      color: "bg-pink-50 dark:bg-pink-950/30 text-pink-600 dark:text-pink-400",
      border: "border-pink-100 dark:border-pink-900/30",
    },
    {
      icon: MapPin,
      label: t.location_label,
      value: "Cabo de Santo Agostinho, PE — Brasil",
      href: null,
      color: "bg-green-50 dark:bg-green-950/30 text-green-600 dark:text-green-400",
      border: "border-green-100 dark:border-green-900/30",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-600 dark:text-blue-400 text-sm font-medium uppercase tracking-widest mb-2">
            {t.subtitle}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            {t.description}
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          {links.map((item, i) => {
            const Icon = item.icon;
            const content = (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className={`flex items-center gap-4 p-4 bg-white dark:bg-gray-800/60 rounded-2xl border ${item.border} shadow-sm hover:shadow-md transition-all group ${item.href ? "hover:-translate-y-0.5 cursor-pointer" : ""}`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color}`}>
                  <Icon size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 dark:text-gray-500 mb-0.5">{item.label}</p>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200 truncate">
                    {item.value}
                  </p>
                </div>
                {item.href && (
                  <ArrowUpRight size={16} className="text-gray-400 group-hover:text-blue-500 transition-colors flex-shrink-0" />
                )}
              </motion.div>
            );

            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
              >
                {content}
              </a>
            ) : (
              <div key={item.label}>{content}</div>
            );
          })}
        </div>

        {/* Email CTA */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="mailto:joaopedroaraujosouzadev@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
          >
            <Mail size={16} />
            {t.send_email}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
