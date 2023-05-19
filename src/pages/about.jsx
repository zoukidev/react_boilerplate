import React, { useState } from "react";
import Header from "../components/header";

export function AboutPage() {
    return (
      <div>
        <Header />
        <div className="w-2/3 m-auto mt-4 grid grid-cols-5 gap-3">
          About
        </div>
      </div>
    );
  }