import React from "react";

const Menu = () => {
  return (
    <>
    <h2>Menu</h2>
      <ul className="menu-list">
        <li>
          <img src="images/4-stations.jpg" alt="Pizza 1" />
          <h2>4 Seasons</h2>
          <p>
            Four different specialties on one pizza: Supreme, Canadian,
            Pepperoni, and Ham.
          </p>
          <h3>
            <span>Price: </span>$14.99
          </h3>
        </li>
        <li>
          <img src="images/big-new-yorker-three-meat.jpg" alt="Pizza 2" />
          <h2>Big New Yorker Meat Trio</h2>
          <p>
            A large pizza inspired by the New York style with big slices,
            featuring three meats: pepperoni, Italian sausage, and bacon bits,
            topped with mozzarella cheese, a blend of oregano and Parmesan
            cheese over the ingredients, and garlic butter on the crust.
          </p>
          <h3>
            <span>Price: </span>$16.99
          </h3>
        </li>
        <li>
          <img src="images/cheese.png" alt="Pizza 3" />
          <h2>Cheese Base Pizzas</h2>
          <p>Pizza with a cheese base.</p>

          <h3>
            <span>Price: </span>$11.99
          </h3>
        </li>
        <li>
          <img src="images/new-york-bacon-banana-peppers.jpg" alt="Pizza 4" />
          <h2>Big New Yorker Bacon & Banana Peppers</h2>
          <p>
            A large pizza inspired by the New York style with big slices,
            featuring pepperoni, bacon bits, and plenty of mild banana pepper
            slices with a tangy touch. Topped with a blend of oregano and
            Parmesan cheese over the ingredients, and garlic butter on the
            crust.
          </p>
          <h3>
            <span>Price: </span>$16.99
          </h3>
        </li>
        <li>
          <img src="images/new-york-pizza.jpg" alt="Pizza 3" />
          <h2>Big New Yorker Pepperoni Lovers</h2>
          <p>
            A large pizza inspired by the New York style with big slices, loaded
            with plenty of pepperoni and mozzarella cheese. Topped with a blend
            of oregano and Parmesan cheese over the ingredients, and garlic
            butter on the crust.
          </p>
          <h3>
            <span>Price: </span>$15.99
          </h3>
        </li>
        <li>
          <img src="images/super-supreme.jpg" alt="Pizza 3" />
          <h2>Super Supreme</h2>
          <p>
            Made with pepperoni, beef and pork, Italian sausage, ham, mushrooms,
            olives, onions, and green peppers.
          </p>
          <h3>
            <span>Price: </span>$17.99
          </h3>
        </li>
      </ul>
    </>
  );
};

export default Menu;
