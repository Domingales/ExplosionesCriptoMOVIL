# 💥 Explosiones Criptos V 1.0

Detector visual y sonoro de **picos bruscos de volatilidad en criptomonedas**, basado en datos reales de **Binance**.  
Diseñado para uso en **móviles Android** (formato PWA o APK), con una interfaz táctil y compacta.

---

## 🚀 Descripción

**Explosiones Criptos** analiza en tiempo real los movimientos de precios de las principales criptomonedas,  
identificando **explosiones alcistas o bajistas** según variaciones porcentuales configurables.

La app permite ajustar los **umbrales de sensibilidad**, elegir intervalos de tiempo y criptomonedas específicas,  
y ofrece **avisos visuales y sonoros** cada vez que se detecta una vela con un movimiento anómalo.

Cada evento queda registrado en una tabla persistente dentro del dispositivo (localStorage),  
para poder revisar posteriormente los momentos en que se produjeron las explosiones.

---

## ⚙️ Características principales

- 📊 **Datos reales de Binance** (fetch directo al endpoint oficial).  
- ⏱️ Intervalos disponibles: `5m`, `10m`, `15m`, `30m`, `1h`, `2h`.  
- 💎 Selección manual de criptomonedas (las 30 más populares).  
- 🎚️ Control de sensibilidad (mínimo y máximo en %).  
- 🔊 Alerta sonora (on/off) y semáforo visual (verde = alcista, rojo = bajista).  
- 🧮 Registro local de cada explosión con hora, porcentaje y volumen.  
- 💾 Persistencia completa mediante `localStorage` (configuración y registros).  
- 📱 Diseño adaptable a orientación **vertical y horizontal**, con interfaz tipo móvil.  
- 🧭 Totalmente **offline-ready** (tras la primera carga).

---

## 🧠 Lógica de detección

1. Se obtienen las últimas **60 velas** de cada símbolo seleccionado desde Binance.  
2. Se calcula el **% de cambio** de la última vela cerrada respecto a su apertura.  
3. Si el cambio supera el **umbral mínimo** configurado (y opcionalmente no supera el máximo):  
   - Si la vela es **verde**, se considera una **explosión alcista**.  
   - Si la vela es **roja**, una **explosión bajista**.  
4. Se evalúa además el **volumen relativo** para clasificar el movimiento como:
   - “💥 Volumen alto” → posible continuación.  
   - “🔹 Bajo volumen” → posible falsa subida o retroceso.  

---

## 🧩 Estructura de archivos

| Archivo | Descripción |
|----------|-------------|
| `index.html` | Interfaz principal (estructura, estilos y simulación del marco móvil). |
| `recogerDatos.js` | Obtiene velas de Binance (`/api/v3/klines`) y las transforma a OHLC. |
| `procesarExplosiones.js` | Aplica los umbrales definidos y determina si hay señal. |
| `uiExplosiones.js` | Controla el flujo visual: sonido, semáforo, registros y persistencia. |

---

## 📲 Uso

1. Abrir la app o instalarla como PWA/APK en el móvil Android.  
2. Seleccionar las criptomonedas a analizar y el intervalo temporal.  
3. Ajustar los umbrales de sensibilidad mínima y máxima.  
4. Pulsar **“Iniciar”**.  
5. La app realizará análisis continuos (por defecto cada 60 segundos).  
6. Cuando una cripto cumpla las condiciones, se activará una alerta sonora y se registrará el evento.

---

## 🧠 Indicadores visuales

| Indicador | Significado |
|------------|-------------|
| 🟢 Semáforo verde | Explosión alcista |
| 🔴 Semáforo rojo | Explosión bajista |
| 💥 | Movimiento con volumen muy alto (posible continuación) |
| 🔹 | Movimiento con poco volumen (posible rebote) |
| ⚡ | Movimiento normal |

---

## 🛠️ Requisitos técnicos

- **Fuente de datos:** [Binance API v3 – klines](https://api.binance.com/api/v3/klines)  
- **Entorno:** Navegador HTML5 / PWA / APK (Android WebView).  
- **Conexión:** Requiere acceso a internet para los datos en tiempo real.  
- **Persistencia:** `localStorage` del navegador o WebView Android.  

---

## 📦 Instalación en Android (modo APK)

1. Exportar la carpeta completa del proyecto (`index.html` + scripts) a un ZIP.  
2. Convertirla con herramientas como **WebIntoApp**, **Vercel**, o **Netlify + TWA**.  
3. Instalar el APK resultante en el dispositivo Android.  
4. Permitir sonido y acceso a red.

---

## 🧭 Notas de desarrollo

- Todas las funciones están encapsuladas para evitar conflictos globales.  
- El sistema de alertas no bloquea el hilo principal (usa `setInterval` y promesas async).  
- Diseño preparado para futuras mejoras:  
  - Backtesting y validación histórica.  
  - Módulo ML para predicción de picos.  
  - Integración con indicadores ADX, RSI, Bollinger, etc.  

---

## 👨‍💻 Autor

**Domingo Aguilera Castelaín**  
Proyecto — _Explosiones Criptos V 1.0_  
© 2025 Todos los derechos reservados.

---
