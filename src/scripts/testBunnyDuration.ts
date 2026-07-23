import axios from "axios";
import fs from "fs";
import { generateBunnyVideoToken } from "./../utils/bunny.js";

// Make sure to load env vars for the token generator
import "dotenv/config";

async function main() {
  try {
    const videoId = "b3f29c66-ef56-4bac-a155-7606080b3c6c";
    const signedUrl = generateBunnyVideoToken(videoId);
    console.log("Fetching Signed URL:", signedUrl);

    const res = await axios.get(signedUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        "Referer": "https://codebreakdowns-admin.vercel.app/"
      }
    });
    const data = res.data;
    const ogMatches = data.match(/<meta[^>]*og:video:duration[^>]*content=["'](\d+)["'][^>]*>/i);
    const durationMatches = data.match(/duration["\s:=]+(\d+)/gi);
    
    console.log("OG Duration Match:", ogMatches?.[1]);
    console.log("Other Duration Matches:", durationMatches);
  } catch (e: any) {
    console.error("Error:", e.response?.status, e.response?.statusText);
  }
}
main();
