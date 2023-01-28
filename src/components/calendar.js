import "./index.css";

export default function Calendar() {
  return (
    <div class="bg-white dark:bg-black flex justify-center">
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23795548&ctz=America%2FNew_York&showTitle=0&showNav=0&showDate=1&showTabs=0&showPrint=0&showCalendars=0&showTz=0&src=MnVlZ2JkMDN0bW1ncTJqMmluNWY2a3QxZmNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23009688&color=%23009688"
        width="800"
        height="600"
        frameborder="0"
        title="Calendar"
        class=""
      ></iframe>
    </div>
  );
}
