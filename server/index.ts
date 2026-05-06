import express from "express";
const app = express();
app.use(express.json());
app.get('/health', (_,res)=>res.json({ok:true,service:'portfolio-ai-server'}));
app.listen(8080, ()=> console.log('API server on :8080'));
