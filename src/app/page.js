import Link from "next/link";

export default function Home() {
  return (
    <>
      <h2>Promotions</h2>

      <img
        className="main-promotion"
        src="images/promotion1.jpg"
        alt="Promotion 1"
      />

      <ul className="others-promotions">
        <li>
          <img src="images/promotion2.jpg" alt="Promotion 2" />
        </li>
        <li>
          <img src="images/promotion3.jpg" alt="Promotion 3" />
        </li>
        <li>
          <img src="images/promotion4.jpg" alt="Promotion 4" />
        </li>
      </ul>
    </>
  );
}
