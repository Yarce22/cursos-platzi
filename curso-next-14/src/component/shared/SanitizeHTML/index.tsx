import { createElement, HTMLAttributes } from "react";
import sanitize from "sanitize-html";

type SanitizeHTMLProps = {
  tag: string,
  children: string
} & React.HTMLAttributes<HTMLElement>

export const SanitizeHTML = ({ tag, children, ...rest }: SanitizeHTMLProps) => {
  const sanitizedHTML = sanitize(children, {
    allowedTags: [],
  })

  return createElement(
    tag,
    {...rest},
    sanitizedHTML
  )
};