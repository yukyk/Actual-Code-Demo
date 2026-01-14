const express = require('express');
const router = express.Router();

// #region agent log
try { fetch('http://127.0.0.1:7242/ingest/3eb7e869-7d7d-41a0-a55e-23bb08e62bdc',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'expenseRouter.js:3',message:'expenseRouter module loading',data:{expenseControllerDefined:typeof expenseController === 'undefined' ? 'undefined (not imported)' : typeof expenseController},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{}); } catch(e) { fetch('http://127.0.0.1:7242/ingest/3eb7e869-7d7d-41a0-a55e-23bb08e62bdc',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'expenseRouter.js:3',message:'Error checking expenseController',data:{error:e.message},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{}); }
// #endregion

// Try to import expenseController
// #region agent log
fetch('http://127.0.0.1:7242/ingest/3eb7e869-7d7d-41a0-a55e-23bb08e62bdc',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'expenseRouter.js:7',message:'Attempting to require expenseController',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
// #endregion
let expenseController;
try {
    expenseController = require('../Controller/expenseController');
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/3eb7e869-7d7d-41a0-a55e-23bb08e62bdc',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'expenseRouter.js:11',message:'Successfully imported expenseController',data:{hasAddExpense:typeof expenseController.addExpense},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
    // #endregion
} catch (error) {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/3eb7e869-7d7d-41a0-a55e-23bb08e62bdc',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'expenseRouter.js:14',message:'Failed to import expenseController',data:{error:error.message,code:error.code},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
    // #endregion
    throw new Error(`expenseController not found. ${error.message}`);
}

// #region agent log
fetch('http://127.0.0.1:7242/ingest/3eb7e869-7d7d-41a0-a55e-23bb08e62bdc',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'expenseRouter.js:19',message:'About to register route with expenseController.addExpense',data:{expenseControllerType:typeof expenseController,hasAddExpense:typeof expenseController.addExpense},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
// #endregion
router.post('/', expenseController.addExpense);


module.exports = router;