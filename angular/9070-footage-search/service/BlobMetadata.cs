using Newtonsoft.Json;

public class BlobMetdata
{
    public string Name { get; set; }

    public string Url { get; set; }

    [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
    public string Tags { get; set; }

    [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
    public string Players { get; set; }
}