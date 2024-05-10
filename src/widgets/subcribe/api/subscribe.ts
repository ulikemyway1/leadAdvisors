export default async function subcribe(email: string) {
  // Just pretend that we use real backend-API
  const response = await fetch(
    "https://api.egorovagency.com/storage/portfolio/warhammer-40k-3d-character-160111657/modules/images/desktop/jpg/4912e1160111657.645273044b950.jpg",
  );
  console.log(`Request status: ${response.status}`);
  if (response.ok) {
    console.log("Success!");
    return true;
  }
  return false;
}
