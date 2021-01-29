/*******************************************
 * @author Carlos Robles
 * @summary Star Wars Random Quote Generator
 * Created Jan 25 2021
 *******************************************/

// Sets current copywrite year in footer
import { getFooterYear } from "./utils.js";
import { loadQuote } from "./utils.js";

getFooterYear();

// Button Event listeners
document
  .getElementById("loadQuoteBtn")
  .addEventListener("click", loadQuote, false);
