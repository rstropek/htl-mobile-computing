using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;

[Route("api/[controller]")]
[ApiController]
public class BlobsController : ControllerBase
{
    private CloudStorageAccount storage;

    public BlobsController(CloudStorageAccount storage)
    {
        this.storage = storage;
    }

    [HttpGet()]
    [Route("videos")]
    public async Task<ActionResult<BlobMetdata>> GetAllVideosAsync() => await this.ListBlobsAsync("videos");

    [HttpGet]
    [Route("images")]
    public async Task<ActionResult<BlobMetdata>> GetAllImagesAsync() => await this.ListBlobsAsync("images");

    public async Task<ActionResult<BlobMetdata>> ListBlobsAsync(string containerName)
    {
        var client = storage.CreateCloudBlobClient();
        var container = client.GetContainerReference(containerName);

        BlobContinuationToken token = null;
        var blobList = new List<BlobMetdata>();
        do
        {
            var result = await container.ListBlobsSegmentedAsync(string.Empty, true, BlobListingDetails.Metadata, null, token, null, null);
            token = result.ContinuationToken;
            blobList.AddRange(result.Results.Cast<CloudBlockBlob>().Select(x => new BlobMetdata 
            {
                Name = x.Name,
                Url = x.Uri.ToString(),
                Tags = x.Metadata.TryGetValue("Tags", out var tags) ? tags : null,
                Players = x.Metadata.TryGetValue("Players", out var players) ? players : null,
            }));
        }
        while (token != null);

        return Ok(blobList);
    }
}