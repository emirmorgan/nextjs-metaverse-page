import React from "react";
import Feedback from "../sections/Feedback";

//Sections
import Hero from "../sections/Hero";
import World from "../sections/World";

describe("animation control", () => {
  const spinAnimate = "animate-[spin_3s_infinite]";
  const pingAnimate = "animate-[ping_2s_infinite]";

  it("Hero section stamp spin animation", () => {
    cy.mount(<Hero />);

    const stamp = cy.get("[data-cy=heroStamp]");

    stamp.should("have.class", spinAnimate);
  });

  it("World section ping animation", () => {
    cy.mount(<World />);

    const blinkOne = cy.get("[data-cy=blink-1]");
    const blinkTwo = cy.get("[data-cy=blink-2]");
    const blinkThree = cy.get("[data-cy=blink-3]");

    blinkOne.should("have.class", pingAnimate);
    blinkTwo.should("have.class", pingAnimate);
    blinkThree.should("have.class", pingAnimate);
  });

  it("Feedback section stamp spin animation", () => {
    cy.mount(<Feedback />);

    const stamp = cy.get("[data-cy=feedbackStamp]");

    stamp.should("have.class", spinAnimate);
  });
});
