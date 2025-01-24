using MODELS = Portfi.Data.Models;

namespace Portfi.Data.Common.Constants;

/// <summary>
/// Contains constant values related to portfolio settings and defaults.
/// </summary>
public static class PortfolioConstants
{
    /// <summary>
    /// The default value for the <see cref="MODELS.Portfolio.IsPublic"/> property.
    /// </summary>
    public const bool DefaultIsPublicValue = true;

    /// <summary>
    /// The default value for the <see cref="MODELS.Portfolio.MainColor"/> property.
    /// </summary>
    public const string DefaultMainColorValue = "#FFFFFF";

    /// <summary>
    /// The default value for the <see cref="MODELS.Portfolio.BackgroundTheme"/> property.
    /// </summary>
    public const string DefaultBackgroundThemeValue = "default-background-theme";

    /// <summary>
    /// The default value for the <see cref="MODELS.Portfolio.Avatar"/> property.
    /// </summary>
    public const string DefaultAvatarValue = "default-avatar.jpg";

    /// <summary>
    /// The default value for the <see cref="MODELS.Portfolio.Rating"/> property.
    /// </summary>
    public const double DefaultRatingValue = 0d;
}