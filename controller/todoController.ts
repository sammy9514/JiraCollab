import express, { Request, Response } from "express";
export const createTodo = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const todo = await todoModel.create({ name });

    res.status(200).json({
      message: "done",
      data: todo,
    });
  } catch (error) {
    res.status(404).json({
      message: "failed",
    });
  }
};