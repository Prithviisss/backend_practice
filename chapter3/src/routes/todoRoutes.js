import express from 'express';
import db from '../db.js'

const router =express.Router()

router.get('/' ,(req,res)=>{
    try {
        const getTodos=db.prepare('SELECT * FROM todo WHERE user_id=?')
        const todos=getTodos.all(req.userId)
        res.json(todos)
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ error: err.message })
    }
 })

router.post('/', (req, res) => {
    try {
        const { task } = req.body;
        const insertTodo = db.prepare('INSERT INTO todo (user_id, task) VALUES (?, ?)');
        const result = insertTodo.run(req.userId, task);
        res.json({ id: result.lastInsertRowid, task, completed: 0 });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message });
    }
});

router.put('/:id', (req, res) => {
    try {
        const { completed } = req.body;
        const { id } = req.params;
        const updatedTodo = db.prepare('UPDATE todo SET completed = ? WHERE id = ?');
        updatedTodo.run(completed, id);
        res.json({ message: "todo updated" });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message });
    }
});

router.delete('/:id', (req, res) => {
 const {id}=req.params
 const userId =req.userId
 const deleteTodo=db.prepare('DELETE FROM todo WHERE id=? AND user_id=?')
 deleteTodo.run(id,userId)
 res.send({message"Todo deleted"})

});

export default router;