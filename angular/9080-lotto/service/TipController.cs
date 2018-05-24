using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class TipController : ControllerBase
{
    [HttpPost()]
    public ActionResult<TipResponse> StoreTip([FromBody] TipRequest tips)
    {
        if (tips == null || tips.Numbers == null || tips.Numbers.Length != 6 
            || tips.Numbers.Any(n => n < 1 || n > 45) || tips.Numbers.GroupBy(n => n).Any(g => g.Count() > 1))
        {
            return BadRequest();
        }

        return Ok(new TipResponse
        {
            ReceiptNumber = new Random().Next(10000, 99999),
            ReceiptTimestamp = DateTime.UtcNow
        });
    }

    [HttpGet()]
    public ActionResult<TipResult> GetResult([FromQuery] int receiptNumber)
    {
        if (receiptNumber < 10000 || receiptNumber > 99999)
        {
            return BadRequest();
        }

        var rand = new Random();
        var correctNumbers = (byte)rand.Next(0, 6);
        return Ok(new TipResult
        {
            CorrectNumbers = correctNumbers,
            Zusatzzahl = rand.Next(0, 5) == 0 && correctNumbers == 5
        });
    }
}