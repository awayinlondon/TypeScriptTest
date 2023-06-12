/**
 * Output: JSON Data
 */
const jsonResponse = await fetch("https://api.github.com/users/denoland");
const jsonData = await jsonResponse.json();
console.log(jsonData);

/**
 * Output: HTML Data
 */
const textResponse = await fetch("https://deno.land/");
const textData = await textResponse.text();
console.log(textData);

/**
 * Output: Error Message
 */
try {
  await fetch("https://raw.githubusercontent.com/awayinlondon/TypeScriptTest/07359c458fc2b8396079fb52811b2c3cf6445ae7/fetch.ts");
} catch (error) {
  console.log(error);
}
