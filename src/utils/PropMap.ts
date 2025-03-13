export const PropMap = () => {
  const props = {
    home: { hideCaseMeta: true },
    capchase: {
      grid: ["1 / span 11", "1 / span 10"],
      challenge:
        "Position the brand as a frontrunner in non-dilutable financing, while bringing to light the business-partner vibe.",
      scope: ["Complete rebrand", "Production output", "Developer handoff"],
      duration: "3 months + retainer",
      year: "2022",
    },
    metaview: {
      grid: ["2 / span 11", "2 / span 10"],
      challenge: "Rebrand Metaview to surface their dedication for fairer hiring solutions, no matter the scale.",
      scope: ["Rebrand & strategy", "Production output"],
      duration: "4 months + retainer",
      year: "2023",
    },
    loctax: {
      grid: ["3 / span 10", "3 / span 10"],
      challenge: "Create a brand that reflects the company's mission to simplify tax compliance for global businesses.",
      scope: ["Rebrand", "Front-end"],
      duration: "2 months + retainer",
      year: "2023",
    },
    loupe: {
      grid: ["4 / span 9", "4 / span 9"],
      challenge:
        "Design a highly shareable & inclusive conference identity, that could co-exist together with Framer's own brand.",
      scope: ["Visual identity", "Front-end"],
      duration: "3 months",
      year: "2020",
    },
    end: {
      hideCaseMeta: true,
      grid: ["4 / span 9", "4 / span 9"],
    },
  } as { [key: string]: PropMapProps };

  return props;
};

export interface PropMapProps {
  grid?: string[];
  scope?: string[];
  challenge?: string;
  duration?: string;
  year?: string;
  hideCaseMeta?: boolean;
}
