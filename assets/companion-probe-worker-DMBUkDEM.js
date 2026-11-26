async function s(){try{const a=await fetch("/sharp-api/health",{cache:"no-store"});return a.ok&&(await a.json())?.app==="sharpsplats"}catch{return!1}}s().then(a=>postMessage(a));
