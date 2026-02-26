"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { bookEntries } from "@/content/data/books";

export function BookSection() {
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
        <p className="text-2xl font-semibold text-primary">喜欢的书</p>
        {bookEntries.length === 0 ? (
          <p className="mt-6 text-sm text-muted">
            暂无书目，可在 content/data/books.ts 中填写。
          </p>
        ) : (
          <ul className="mt-8 space-y-4">
            {bookEntries.map((book, i) => (
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
  book: (typeof bookEntries)[0];
  index: number;
}) {
  const inner = (
    <>
      <div className="flex h-14 w-10 shrink-0 items-center justify-center overflow-hidden rounded border border-border bg-surface">
        {book.cover ? (
          <Image
            src={book.cover}
            alt=""
            width={40}
            height={56}
            className="object-cover"
          />
        ) : (
          <BookOpen className="h-5 w-5 text-accent-green" />
        )}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline gap-2">
          <span className="font-medium text-primary">{book.title}</span>
          <span className="text-sm text-muted">{book.author}</span>
        </div>
        {book.note && (
          <p className="mt-1 text-sm leading-relaxed text-secondary">
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
