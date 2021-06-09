import { h } from "preact";
import style from "./style.css";
import { route, Link } from "preact-router";

const Manage = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("startTable", e.target.startTable.value);
    localStorage.setItem("endTable", e.target.endTable.value);
    route("/");
  };
  return (
    <div class={style.container}>
      <Link href="/" class={style.link}>
        Go Home
      </Link>
      <form class={style.form} onSubmit={onSubmit}>
        <field class={style.field}>
          <label class={style.label}>Start Table</label>
          <input
            class={`${style.input} ${style.boxEffect}`}
            placeholder="Start Table"
            name="startTable"
            required
            type="number"
            min={2}
          />
        </field>
        <field class={style.field}>
          <label class={style.label}>End Table</label>
          <input
            class={`${style.input} ${style.boxEffect}`}
            placeholder="End Table"
            name="endTable"
            required
            type="number"
            min={2}
          />
        </field>

        <button class={style.button}>Update</button>
      </form>
    </div>
  );
};

export default Manage;
