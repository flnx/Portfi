using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace PortfiModels.Data
{
    public class Portfolio
    {
        [Key]
        public Guid Id { get; set; }

        public string UserId { get; set; }

        public string Bio { get; set; }

        public decimal Rating { get; set; }

        public DateTime CreatedOn { get; set; }

        public string CV { get; set; }

        public string ProfilePictureUrl { get; set; }

        public bool IsPublic { get; set; }

        public string BackgroundTheme { get; set; }

        public string MainColor { get; set; }

        public Dictionary<string, SocialMediaPlatform> SocialMediaLinks { get; set; }

        public ICollection<Project> Projects { get; set; }

        public ICollection<PortfolioView> PortfolioViews { get; set; }
        public ICollection<PortfolioDownload> PortfolioDownloads { get; set; }

    }
    public enum SocialMediaPlatform
    {
        GitHub = 1,
        LinkedIn = 2,
        Email = 3,
        Instagram = 4,
        X = 5,
        YouTube = 6,
        FaceBook = 7,
        Pinterest = 8,
        TikTok = 9,
        Other = 10,

    }

}
