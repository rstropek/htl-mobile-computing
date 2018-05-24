using Newtonsoft.Json;
using System;

public class TipRequest
{
    public byte[] Numbers { get; set; }

    public bool Joker { get; set; }
}

public class TipResponse
{
    public DateTime ReceiptTimestamp { get; set; }

    public int ReceiptNumber { get; set; }
}

public class TipResult
{
    public byte CorrectNumbers { get; set; }

    public bool Zusatzzahl { get; set; }
}