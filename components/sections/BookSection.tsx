"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { useLocale } from "@/components/providers/LanguageProvider";
import { DateBadge } from "@/components/ui/DateBadge";
import type { BookEntry } from "@/content/data/books";

export function BookSection() {
  const { content } = useLocale();
  const { books, sectionTitles, labels } = content;
  return (
    <section id="book" className="border-t border-border py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-4xl"
      >
        <h2 className="font-mono text-sm font-medium text-accent-green mb-2">
          Books
        </h2>
        <p className="text-2xl font-semibold text-primary">{sectionTitles.books}</p>
        {books.length === 0 ? (
          <p className="mt-6 text-sm text-muted">{labels.booksEmpty}</p>
        ) : (
          <ul className="mt-8 space-y-4">
            {books.map((book, i) => (
              <BookItem key={`${book.title}-${book.author}`} book={book} index={i} />
            ))}
          </ul>
        )}
      </motion.div>
    </section>
  );
}

function BookItem({
  book,
  index,
}: {
  book: BookEntry;
  index: number;
}) {
  const inner = (
    <>
      <div className="relative h-28 w-20 shrink-0 overflow-hidden rounded border border-border bg-surface sm:h-36 sm:w-24">
        {book.cover ? (
          <Image
            src={book.cover}
            alt=""
            fill
            className="object-cover"
            sizes="96px"
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center">
            <BookOpen className="h-8 w-8 text-accent-green" />
          </span>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline gap-2">
          <span className="font-medium text-primary">{book.title}</span>
          {book.date && <DateBadge>{book.date}</DateBadge>}
        </div>
        <p className="mt-0.5 text-sm text-muted">{book.author}</p>
        {book.note && (
          <p className="mt-1 whitespace-pre-line text-sm leading-relaxed text-secondary">
            {book.note}
          </p>
        )}
      </div>
    </>
  );

  return (
    <motion.li
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="rounded-lg border border-border bg-elevated/50 backdrop-blur-sm"
    >
      {book.link ? (
        <a
          href={book.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-4 px-4 py-3 transition-opacity hover:opacity-90"
        >
          {inner}
        </a>
      ) : (
        <div className="flex gap-4 px-4 py-3">{inner}</div>
      )}
    </motion.li>
  );
}
