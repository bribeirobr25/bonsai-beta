import type { Metadata } from "next";

/**
 * Applied by every surface that must not be indexed (gate IDX-1).
 *
 * `nocache` and the googleBot block matter as much as `index: false`: a page
 * can be excluded from results and still be cached or snippet-previewed, which
 * for a private record or a share link is the same leak by another route.
 */
export const NO_INDEX: Metadata["robots"] = {
  index: false,
  follow: false,
  nocache: true,
  googleBot: {
    index: false,
    follow: false,
    noimageindex: true,
    "max-snippet": 0,
    "max-image-preview": "none",
  },
};
