﻿// ================= PROCESAREXPLOSIONES.JS =================
// Filtro final de umbrales y despacho a UI (tabla + semáforo + sonido)

(() => {
  // En esta versión, la lógica principal ya la calcula EC_fetchLatestStats (recogerDatos.js)
  // Aquí aplicamos los umbrales seleccionados y despachamos a la UI (hecho en uiExplosiones.js)
  // Dejo hooks públicos por si deseas ampliar reglas sin tocar otros archivos.

  window.EC_shouldTrigger = (stats, umbrales) => {
    // stats: { changePct, tipo, openTime, ... }
    // umbrales: { min, max }
    if (!stats || !stats.tipo) return false;
    const { changePct } = stats;
    const { min, max } = umbrales;

    const change = Number(changePct);
    if (isNaN(change)) return false; // seguridad extra
    const rounded = parseFloat(change.toFixed(3)); // solo 3 decimales

    const overMin = Math.abs(rounded) >= min;
    const underMax = !isFinite(max) ? true : Math.abs(rounded) <= max;

    return overMin && underMax;
  };

  // Si quisieras inyectar reglas extra (ej. ADX, Bollinger, etc.), podrías:
  // window.EC_extraRules = (stats) => true;

  // Nota: el despacho real (semaforo/sonido/tabla) se ejecuta en uiExplosiones.js -> tick()
})();
