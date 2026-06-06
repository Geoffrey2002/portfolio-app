"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import {
  Home,
  User,
  Code2,
  Briefcase,
  FolderGit2,
  Mail,
  FileText,
  Download,
  Github,
  Linkedin,
  Search,
  CornerDownLeft,
} from "lucide-react";

type Item = {
  group: string;
  label: string;
  keywords?: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  run: () => void;
  external?: boolean;
};

const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const router = useRouter();
  const listRef = useRef<HTMLDivElement>(null);

  const go = useCallback(
    (href: string) => {
      setOpen(false);
      router.push(href);
    },
    [router]
  );

  const items = useMemo<Item[]>(() => {
    const nav: Item[] = [
      { group: "Navigate", label: "Home", icon: Home, run: () => go("/#home") },
      { group: "Navigate", label: "About", icon: User, run: () => go("/#about") },
      { group: "Navigate", label: "Skills", icon: Code2, run: () => go("/#skills") },
      { group: "Navigate", label: "Experience", icon: Briefcase, run: () => go("/#experience") },
      { group: "Navigate", label: "Projects", icon: FolderGit2, run: () => go("/#projects") },
      { group: "Navigate", label: "Contact", icon: Mail, run: () => go("/#contact") },
      { group: "Navigate", label: "Resume", icon: FileText, run: () => go("/resume") },
    ];
    const actions: Item[] = [
      {
        group: "Actions",
        label: "Download CV (PDF)",
        keywords: "resume cv download pdf",
        icon: Download,
        run: () => {
          setOpen(false);
          const link = document.createElement("a");
          link.href = "/Geoffrey_Mwangi_CV.pdf";
          link.download = "Geoffrey_Mwangi_Muthoni_CV.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        },
      },
    ];
    const links: Item[] = [
      {
        group: "Connect",
        label: "GitHub",
        keywords: "code repository",
        icon: Github,
        external: true,
        run: () => {
          setOpen(false);
          window.open("https://github.com/Geoffrey2002", "_blank", "noopener,noreferrer");
        },
      },
      {
        group: "Connect",
        label: "LinkedIn",
        icon: Linkedin,
        external: true,
        run: () => {
          setOpen(false);
          window.open("https://www.linkedin.com/in/geoffrey-muthoni/", "_blank", "noopener,noreferrer");
        },
      },
      {
        group: "Connect",
        label: "Email Geoffrey",
        keywords: "mail contact",
        icon: Mail,
        external: true,
        run: () => {
          setOpen(false);
          window.location.href = "mailto:gmwangi3174@gmail.com";
        },
      },
    ];
    return [...nav, ...actions, ...links];
  }, [go]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((it) =>
      `${it.label} ${it.keywords ?? ""} ${it.group}`.toLowerCase().includes(q)
    );
  }, [items, query]);

  // Global ⌘K / Ctrl+K toggle
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    const openEvt = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-command-palette", openEvt);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-command-palette", openEvt);
    };
  }, []);

  // Reset state whenever it opens
  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
    }
  }, [open]);

  // Keep active index in range as the list filters
  useEffect(() => {
    setActive((a) => Math.min(a, Math.max(filtered.length - 1, 0)));
  }, [filtered.length]);

  const onListKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      filtered[active]?.run();
    }
  };

  let lastGroup = "";

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in" />
        <Dialog.Content
          aria-label="Command menu"
          onKeyDown={onListKeyDown}
          className="fixed left-1/2 top-[18%] z-[101] w-[92%] max-w-xl -translate-x-1/2 overflow-hidden rounded-2xl border border-[--color-border] bg-[--color-bg-card] shadow-2xl focus:outline-none"
        >
          <Dialog.Title className="sr-only">Command menu</Dialog.Title>
          <Dialog.Description className="sr-only">
            Search to navigate the site, download the CV, or open social links.
          </Dialog.Description>

          {/* Search input */}
          <div className="flex items-center gap-3 border-b border-[--color-border] px-4">
            <Search size={18} className="shrink-0 text-[--color-text-light]" />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a command or search…"
              aria-label="Search commands"
              className="w-full bg-transparent py-4 text-[--color-text] placeholder:text-[--color-text-light] focus:outline-none"
            />
            <kbd className="hidden shrink-0 rounded border border-[--color-border] px-1.5 py-0.5 text-[10px] font-medium text-[--color-text-light] sm:block">
              ESC
            </kbd>
          </div>

          {/* Results */}
          <div ref={listRef} className="max-h-[320px] overflow-y-auto p-2">
            {filtered.length === 0 && (
              <p className="px-3 py-6 text-center text-sm text-[--color-text-light]">
                No results for “{query}”.
              </p>
            )}
            {filtered.map((it, i) => {
              const Icon = it.icon;
              const showHeader = it.group !== lastGroup;
              lastGroup = it.group;
              const isActive = i === active;
              return (
                <div key={`${it.group}-${it.label}`}>
                  {showHeader && (
                    <p className="px-3 pb-1 pt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[--color-text-light]">
                      {it.group}
                    </p>
                  )}
                  <button
                    type="button"
                    onClick={() => it.run()}
                    onMouseMove={() => setActive(i)}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                      isActive
                        ? "bg-[--color-primary]/12 text-[--color-text]"
                        : "text-[--color-text-light] hover:bg-[--color-bg-hover]"
                    }`}
                  >
                    <Icon
                      size={18}
                      className={isActive ? "text-[--color-primary]" : "text-[--color-text-light]"}
                    />
                    <span className="flex-1 font-medium text-[--color-text]">{it.label}</span>
                    {isActive && (
                      <CornerDownLeft size={14} className="text-[--color-text-light]" />
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CommandPalette;
