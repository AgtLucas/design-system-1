import React from "react";
import { storiesOf } from "@storybook/react";
import Select from "./Select";
import PrimaryButton from "../Button/PrimaryButton";

const options = [
  { value: "accepted", label: "Accepted" },
  { value: "assigned", label: "Assigned to a line" },
  { value: "hold", label: "On hold" },
  { value: "rejected", label: "Rejected" },
  { value: "open", label: "Open" },
  { value: "progress", label: "In progress" },
  { value: "quarantine", label: "In quarantine" },
];

storiesOf("Select", module)
  .add("Select", () => (
    <Select placeholder="Please select inventory status" options={ options } />
  ))
  .add("Set to disabled", () => (
    <Select
      placeholder="Please select inventory status"
      options={ options }
      isDisabled="true"
    />
  ))
  .add("Set to error", () => (
    <Select placeholder="Please select inventory status" options={ options } error="true" />
  ))
  .add("Set to required", () => (
    <form>
      <Select placeholder="Please select inventory status" options={ options } required="true" />
      <PrimaryButton mt={ 2 } type="submit">Submit</PrimaryButton>
    </form>
  ));
