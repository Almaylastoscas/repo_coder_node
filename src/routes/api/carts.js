import { Router } from "express";
import managerCart from "./../../managers/Cart.js";

const router = Router();

router.post("/", async (req, res, next) => {
  try {
    let response = await managerCart.add_cart(req.body);
    if (response === 201) {
      return res.json({ status: 201, message: "cart created" });
    }
    return res.json({ status: 400, message: "not created" });
  } catch (error) {
    next(error);
  }
});
router.get("/", async (req, res, next) => {
  try {
    let all = managerCart.read_carts();
    if (all.length > 0) {
      return res.json({ status: 200, all });
    }
    let message = "not found";
    return res.json({ status: 404, message });
  } catch (error) {
    next(error);
  }
});
router.get("/:pid", async (req, res, next) => {
  try {
    let id = Number(req.params.pid);
    let one = managerCart.read_cart(id);
    if (one) {
      return res.json({ status: 200, one });
    }
    let message = "not found";
    return res.json({ status: 404, message });
  } catch (error) {
    next(error);
  }
});
router.put("/:cid/product/:pid/:units", async (req, res, next) => {
  try {
    let id = Number(req.params.pid);
    let cid = Number(req.params.cid);
    let units = Number(req.params.units);

    let response = await managerCart.update_cart(cid, id, units);
    if (response === 200) {
      return res.json({ status: 200, message: "cart updated" });
    }
    return res.json({ status: 404, message: "not found" });
  } catch (error) {
    next(error);
  }
});
router.delete("/:pid", async (req, res, next) => {
  try {
    let id = Number(req.params.pid);
    let response = await managerCart.destroy_cart(id);
    if (response === 200) {
      return res.json({ status: 200, message: "cart deleted" });
    }
    return res.json({ status: 404, message: "not found" });
  } catch (error) {
    next(error);
  }
});

export default router;
