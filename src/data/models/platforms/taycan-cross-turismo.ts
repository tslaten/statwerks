import type { Platform } from "../types";

/**
 * Reviewed research, September 2026. First pass for this platform — and
 * the site's first electric car and first model outside the 911 /
 * Cayman-Boxster sports-car lines (see the scope note in `roadmap.ts`).
 * Built via web search across specialist/enthusiast and news sources
 * (TaycanForum, Rennlist, InsideEVs, Green Car Reports, The Drive,
 * Electrek, Go-Parts, EVspecs) and classic.com aggregate pricing. Same
 * sourcing-quality note as the 718 platform: WebFetch (direct page
 * retrieval) was blocked this pass for every domain tried — including
 * static.nhtsa.gov, so recall details below trace to news coverage and
 * forum recall threads rather than the NHTSA campaign documents
 * themselves. Treat specific numbers as "reported by X."
 *
 * Scope: pre-facelift ("J1.1") Cross Turismo only, US model years
 * 2021–2024. The 2025+ facelift ("J1.2") changed the battery, motors,
 * and power figures enough that it should be its own platform later,
 * the same way 997.1 and 997.2 are separate generations — not folded
 * in here.
 *
 * `Platform.chassisCode` is set to "Taycan" rather than the internal
 * "J1" designation, following the precedent documented on the 718
 * platform: that field doubles as the display prefix on cards, the
 * sidebar, and search ("Taycan 4S Cross Turismo"), and nobody shopping
 * for one calls it a "J1." The true J1 code is in quickFacts below.
 *
 * Several items that are standard fare on the ICE platforms (IMS, AOS,
 * bore scoring, carbon buildup) simply don't exist here — rather than
 * list each as a "not applicable" entry, the platform summary says so
 * once. The known issues below are EV-specific instead.
 */
export const taycanCrossTurismo: Platform = {
  slug: "taycan-cross-turismo",
  chassisCode: "Taycan",
  name: "Taycan Cross Turismo",
  shortName: "Taycan CT",
  teaser:
    "The lifted, wagon-bodied electric Taycan — no engine to worry about, but a high-voltage battery recall and a fragile 12V battery to check instead.",
  contentStatus: "reviewed",

  overview: {
    years: "2021–2024",
    layout: "Dual-motor, all-wheel drive",
    body: "5dr wagon",
    summary:
      "The Cross Turismo is the Taycan's raised wagon body: roughly 20mm more ride height than the sedan as standard, adaptive air suspension across the range, a longer roofline with meaningfully more rear headroom and cargo space, and a \"Gravel\" drive mode. Every Cross Turismo is dual-motor all-wheel drive and every one uses the larger 93.4 kWh (gross) Performance Battery Plus — there is no small-battery or rear-drive Cross Turismo. This page covers the pre-facelift (internally \"J1.1\") cars sold as 2021–2024 model years; the 2025 facelift is a meaningfully different car and isn't covered here yet. For buyers coming from the rest of this site: none of the usual water-cooled-Porsche engine worries apply — there's no IMS bearing, no oil, no bore scoring, no air-oil separator. The Taycan's risk profile is different instead, dominated by a high-voltage battery recall that touches most of these cars, a 12V battery that can strand the car, and software/charging faults — all worth checking, none of them mechanical in the traditional sense.",
    quickFacts: [
      { label: "Production", value: "2021–2024 model years (pre-facelift)" },
      { label: "Chassis code", value: "J1 (pre-facelift \"J1.1\")" },
      { label: "Layout", value: "Dual-motor AWD" },
      { label: "Battery", value: "93.4 kWh gross / 83.7 kWh usable (Performance Battery Plus, standard)" },
    ],
  },

  sharedKnownIssues: [
    {
      id: "hv-battery-short-circuit-recall",
      title: "High-voltage battery short-circuit recall (ARB6 / ARB7)",
      severity: "critical",
      summary:
        "Battery modules from a supplier production issue can develop an internal short circuit, with a fire risk in the worst case. The expanded recall covers nearly every pre-facelift Taycan, Cross Turismo included.",
      detail:
        "Traced to a manufacturing defect in LG Energy Solution cells built at its Poland plant. After smaller earlier campaigns (January and April 2024, covering a few hundred cars each), Porsche expanded the recall on October 1, 2024 to roughly 27,000 US Taycans across the 2020–2024 model years, under two internal codes: ARB6 cars are told to charge to no more than 80% until the fix is done; ARB7 cars have continuous over-the-air monitoring and don't carry the charge limit. The remedy is dealer analysis of the battery's module data, replacement of any modules showing anomalies, then installation of on-board diagnostic software that keeps watching for the fault going forward — all free of charge. Owner letters went out around late November 2024 with the fix projected for early 2025, so by now most cars should be done, but a used car that sat unregistered or changed hands through auction may not be. This research pass confirmed the codes and dates via forum recall threads and news coverage; it couldn't retrieve the NHTSA campaign documents directly.",
      whatToCheck: [
        "Run the VIN through NHTSA's recall lookup and have a Porsche dealer confirm ARB6/ARB7 status — not just \"open\" vs. \"closed,\" but whether modules were replaced",
        "Ask the seller whether the car is (or was) under the 80% charge-limit instruction, and whether a dealer ever replaced battery modules",
        "Treat an open battery recall as non-negotiable: get it closed before purchase, or price in the time without the car while the dealer does it",
      ],
    },
    {
      id: "12v-battery-stranding",
      title: "12V battery drain — the car won't wake even with a full main battery",
      severity: "watch",
      summary:
        "The most-cited Taycan ownership complaint: a flat 12V battery bricks the car regardless of the high-voltage battery's charge, often after as little as 10–14 days parked.",
      detail:
        "The 12V battery (lithium on most cars; some early cars used AGM) runs the control modules, locks, and safety systems — if it goes flat, the car won't power on or may not even unlock, no matter how charged the main pack is. Early cars (2020–2021) also had a battery-management bootloader software fault that could drain the 12V or cause a loss of drive readiness; after an NHTSA inquiry, Porsche handled it with a software recall that updated the power electronics and related control units. That's been addressed on cars that have had the update, but the underlying sensitivity to long parking remains. Dealer replacement of the lithium 12V is widely reported at roughly $2,000–3,000; owners overwhelmingly recommend a lithium-compatible maintainer for any car that sits.",
      whatToCheck: [
        "Ask whether the 12V battery has ever been replaced, and whether the car has ever failed to wake after sitting",
        "Confirm the 12V-related software recall was performed (VIN check) on 2021-model-year cars",
        "Ask how the car was stored — a car that sat for weeks without a maintainer is worth a 12V health test",
      ],
    },
    {
      id: "front-brake-hose-recall",
      title: "Front brake hoses can crack and leak (ARB0 recall)",
      severity: "critical",
      summary:
        "A June 2024 recall covering every 2020–2025 Taycan (~31,700 US cars): the front brake hoses can be stressed at their tightest bend and leak fluid, reducing braking performance.",
      detail:
        "Under certain steering and suspension compression conditions, the front hoses are stressed at their minimum bending radius, which can damage the inner fabric liner and eventually leak. The car warns with \"brake fluid low\" or \"PSM failure\" messages if it happens. The remedy is replacement with revised hoses that have a larger bending radius — free of charge; revised hoses went into production on May 13, 2024. Straightforward to verify and fix, but a safety item that should be closed before you drive the car home.",
      whatToCheck: [
        "Confirm the ARB0 brake hose recall is completed via VIN",
        "Check the service history for any \"brake fluid low\" or PSM warning messages",
      ],
    },
    {
      id: "rear-gearbox-clunk",
      title: "Rear two-speed gearbox clunk / knock",
      severity: "watch",
      summary:
        "The rear motor's two-speed transmission sometimes produces a clunk on the 1st-to-2nd upshift or a knock around 35–40 mph. Mostly a noise complaint rather than a failure pattern.",
      detail:
        "Every Taycan's rear drive unit has a two-speed gearbox (unusual for an EV), and it was the main mechanical question mark at launch. It hasn't turned into a widespread failure point, but owners do report a slight clunk when it shifts into second (around 50 mph in normal mode), and Porsche issued technical bulletins addressing a knocking noise from the rear drive module on acceleration to roughly 38 mph (60 km/h). Isolated forum reports describe a gearbox replaced for excessive noise. Treat a mild shift clunk as normal character and a loud or repeated knock as worth a dealer look.",
      whatToCheck: [
        "On the test drive, accelerate gently through 35–55 mph in Normal mode and listen for a knock or harsh clunk from the rear",
        "Ask whether any rear drive unit work was done under warranty, and what the TSB outcome was",
      ],
    },
    {
      id: "charging-faults",
      title: "Onboard charger and charge-port faults",
      severity: "watch",
      summary:
        "Level 2 (AC) charging that stops intermittently, charge-port overtemperature faults, and aging onboard chargers show up repeatedly in owner reports.",
      detail:
        "Documented symptoms include AC charging sessions that stop unexpectedly — including a stored \"charging socket — overtemperature\" fault (P31D200) reported with Porsche's own Mobile Charger Connect — and onboard charger failures on older cars. US cars came with a 9.6 kW onboard AC charger as standard, with a 19.2 kW unit optional (it needs a matching high-amperage home circuit to use). No reliable failure-rate figure turned up in this pass; the practical advice from every source is to actually charge the car before buying.",
      whatToCheck: [
        "Plug the car into a Level 2 charger during the inspection and confirm it charges at the expected rate without faults",
        "If possible, also do a short DC fast-charging session and confirm the charge rate ramps up normally",
        "Ask which onboard charger it has (9.6 kW or 19.2 kW) and whether it's ever been replaced",
      ],
    },
    {
      id: "software-infotainment",
      title: "Software, camera, and infotainment glitches",
      severity: "watch",
      summary:
        "A steady background of software issues — screens rebooting, camera faults, connectivity drops — most of them fixed by updates rather than parts.",
      detail:
        "Every source that surveys Taycan reliability groups software and infotainment/camera faults as a recurring theme alongside the battery and charging items above. Most are addressed by dealer software updates rather than hardware replacement, but a car that missed updates can feel noticeably buggier. Not a reason to walk away, but confirm the car is running current software.",
      whatToCheck: [
        "Cycle through every screen, the cameras, and phone connectivity on the test drive",
        "Ask when the car last had a dealer software update",
      ],
    },
    {
      id: "hv-battery-degradation",
      title: "High-voltage battery degradation — so far a strength, not a weakness",
      severity: "clear",
      summary:
        "Separate from the short-circuit recall, capacity loss has been mild: owners past 60,000 miles commonly report more than 90% of original capacity. Covered by an 8-year / 100,000-mile warranty.",
      detail:
        "The 800-volt, liquid-cooled pack has held up well in real-world reports. Porsche's high-voltage battery warranty runs 8 years / 100,000 miles (separate from the 4-year / 50,000-mile new-car warranty) and covers both defects and capacity falling below roughly 70% of original. On a 2021–2024 car, that warranty still has years left to run, which is a real part of the used-market case for these cars. A battery state-of-health reading is still the most useful single number to get before you buy.",
      whatToCheck: [
        "Get a dealer or specialist battery health (state-of-health) report, not just the range shown on the dash",
        "Confirm the in-service date so you know how much of the 8-year / 100,000-mile battery warranty remains",
      ],
    },
  ],

  checklist: {
    documentsToRequest: [
      "Full service history from a Porsche dealer — independent EV-capable Porsche specialists are still rare, so dealer records are the norm here",
      "VIN-based recall confirmation: ARB6/ARB7 high-voltage battery, ARB0 front brake hoses, and the early 12V/power-electronics software recall, as applicable",
      "A high-voltage battery state-of-health report",
      "Original in-service date (sets the remaining 8-year / 100,000-mile battery warranty)",
      "Title history / accident or salvage check (Carfax or equivalent) — structural and battery-adjacent damage on an EV is expensive",
    ],
    questionsForSeller: [
      "Was the car ever under the 80% charge-limit instruction, and have the battery recall inspections and any module replacements been done?",
      "Has the car ever failed to wake up or unlock because of a dead 12V battery? Has the 12V been replaced?",
      "How has the car been charged day to day — home Level 2, public DC fast charging, or a mix?",
      "Which onboard charger does it have (9.6 kW or 19.2 kW), and does it come with the Mobile Charger Connect?",
      "When did it last have a dealer software update?",
    ],
    ppiAdvice: [
      "There's no engine to inspect — spend the PPI budget on a battery health report and a recall/software status check at a Porsche dealer",
      "Charge the car during the inspection: confirm Level 2 charging works without faults, and ideally a short DC fast-charge session too",
      "Listen for a knock or clunk from the rear drive unit when accelerating through 35–55 mph",
      "Check air suspension: confirm the car holds its ride height overnight and the height settings (including Gravel mode) respond",
      "Confirm every safety recall is closed via VIN — treat open battery or brake hose recalls as non-negotiable",
    ],
  },
};
