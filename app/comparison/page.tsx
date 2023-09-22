import CssServerComponents from './css-server/cssServer';
import NextServerComponents from './next-server/nextServer';

export default function page() {
  return (
    <>
      <CssServerComponents />

      <NextServerComponents />
    </>
  );
}
