import { Link } from "react-router-dom";

export function Contact() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 min-h-screen flex flex-col items-center">
      {/* Hero Section */}
      <header className="w-full max-w-7xl mb-24 flex flex-col items-center text-center">
        <h1 className="font-headline text-5xl md:text-7xl font-light tracking-tighter text-white mb-6">
          Inquiries
        </h1>
        <div className="w-12 h-[1px] bg-outline mb-6" />
        <p className="font-body text-on-surface-variant max-w-xl text-sm md:text-base leading-relaxed tracking-wide">
          Our atelier operates with intentional silence. For private appointments,
          wholesale inquiries, or garment care support, please reach out via the
          channel most suited to your needs.
        </p>
      </header>

      {/* Main Content: Form & Details */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        {/* Contact Form */}
        <section className="order-2 lg:order-1">
          <form className="space-y-12">
            <div className="space-y-2">
              <label className="font-label text-[10px] tracking-[0.2em] uppercase text-on-surface-variant block">
                Full Name
              </label>
              <input
                className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant py-4 focus:ring-0 focus:outline-none focus:border-white text-white font-light placeholder:text-neutral-800 transition-colors duration-400"
                placeholder="GIOVANNI WRAITH"
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label className="font-label text-[10px] tracking-[0.2em] uppercase text-on-surface-variant block">
                Email Address
              </label>
              <input
                className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant py-4 focus:ring-0 focus:outline-none focus:border-white text-white font-light placeholder:text-neutral-800 transition-colors duration-400"
                placeholder="ATELIER@WRAITH.STUDIO"
                type="email"
              />
            </div>
            <div className="space-y-2">
              <label className="font-label text-[10px] tracking-[0.2em] uppercase text-on-surface-variant block">
                Subject
              </label>
              <input
                className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant py-4 focus:ring-0 focus:outline-none focus:border-white text-white font-light placeholder:text-neutral-800 transition-colors duration-400"
                placeholder="BESPOKE CONSULTATION"
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label className="font-label text-[10px] tracking-[0.2em] uppercase text-on-surface-variant block">
                Message
              </label>
              <textarea
                className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant py-4 focus:ring-0 focus:outline-none focus:border-white text-white font-light placeholder:text-neutral-800 transition-colors duration-400 resize-none"
                placeholder="DESCRIBE YOUR REQUEST..."
                rows={4}
              />
            </div>
            <button
              className="w-full md:w-auto px-16 py-5 bg-white text-black font-bold font-label text-[10px] tracking-[0.3em] uppercase hover:bg-neutral-200 transition-colors duration-400"
              type="button"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* Contact Details & Map/Visual */}
        <section className="order-1 lg:order-2 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="font-label text-[10px] tracking-[0.2em] uppercase text-white">
                The Atelier
              </h3>
              <p className="font-body text-sm text-on-surface-variant leading-loose">
                12 VIA MONTENAPOLEONE<br />
                MILAN, ITALY 20121
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-label text-[10px] tracking-[0.2em] uppercase text-white">
                Direct Lines
              </h3>
              <p className="font-body text-sm text-on-surface-variant leading-loose">
                CONCIERGE@WRAITH.STUDIO<br />
                +39 02 8765 4321
              </p>
            </div>
          </div>
          <div className="relative w-full aspect-[4/3] bg-surface-container-lowest overflow-hidden">
            <img
              className="w-full h-full object-cover opacity-50 filter grayscale"
              alt="Atelier building"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCthoirPk-LWYpZw6H26NynxdEcIG1fISymCPSvQatK-NhwyvevzeJ-b4KXgqmdGRTaQnmx6jqTauVDbXx-4P5_Q7hADL980MjC9rXc-hqdH5XTblGC8NvI8X2c-adryBRoW12oFK8Ne9fknHS_D263OBryVU7YiRDlv0tNdXO5y3jSyAQ8nIyHN_Yz9gVdwKarO19FNEtb5fRVxqgM67tW6rThvlbOz76ki-CbXqY_KzxMVu_vTueifnEcQHQs5yAT5ArWPBfL_60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          </div>

          <div className="pt-8 space-y-6">
            <h3 className="font-label text-[10px] tracking-[0.2em] uppercase text-white">
              Digital Presence
            </h3>
            <div className="flex space-x-8">
              <Link to="#" className="text-white hover:opacity-50 transition-opacity duration-400">
                <span className="material-symbols-outlined">brand_awareness</span>
              </Link>
              <Link to="#" className="text-white hover:opacity-50 transition-opacity duration-400">
                <span className="material-symbols-outlined">close</span>
              </Link>
              <Link to="#" className="text-white hover:opacity-50 transition-opacity duration-400">
                <span className="material-symbols-outlined">play_circle</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
