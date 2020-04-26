"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ActiveHour;
(function (ActiveHour) {
    ActiveHour["The0000"] = "00:00";
    ActiveHour["The0059"] = "00:59";
    ActiveHour["The0100"] = "01:00";
    ActiveHour["The0400"] = "04:00";
    ActiveHour["The0500"] = "05:00";
    ActiveHour["The0600"] = "06:00";
    ActiveHour["The0800"] = "08:00";
    ActiveHour["The0900"] = "09:00";
    ActiveHour["The1000"] = "10:00";
    ActiveHour["The1600"] = "16:00";
    ActiveHour["The1700"] = "17:00";
    ActiveHour["The1800"] = "18:00";
    ActiveHour["The1900"] = "19:00";
    ActiveHour["The2000"] = "20:00";
    ActiveHour["The2100"] = "21:00";
    ActiveHour["The2200"] = "22:00";
})(ActiveHour = exports.ActiveHour || (exports.ActiveHour = {}));
var Catalog;
(function (Catalog) {
    Catalog["ForSale"] = "For sale";
    Catalog["NotForSale"] = "Not for sale";
    Catalog["NotInCatalog"] = "Not in catalog";
})(Catalog = exports.Catalog || (exports.Catalog = {}));
var Category;
(function (Category) {
    Category["Accessories"] = "Accessories";
    Category["Bags"] = "Bags";
    Category["Bottoms"] = "Bottoms";
    Category["Bridge"] = "Bridge";
    Category["Door"] = "Door";
    Category["Dresses"] = "Dresses";
    Category["Fencing"] = "Fencing";
    Category["Floors"] = "Floors";
    Category["Headwear"] = "Headwear";
    Category["Housewares"] = "Housewares";
    Category["Incline"] = "Incline";
    Category["Mailbox"] = "Mailbox";
    Category["Miscellaneous"] = "Miscellaneous";
    Category["Other"] = "Other";
    Category["Recipe"] = "Recipe";
    Category["Roofing"] = "Roofing";
    Category["Rugs"] = "Rugs";
    Category["Shoes"] = "Shoes";
    Category["Siding"] = "Siding";
    Category["Tools"] = "Tools";
    Category["Tops"] = "Tops";
    Category["Umbrellas"] = "Umbrellas";
    Category["WallMounted"] = "Wall-mounted";
    Category["Wallpaper"] = "Wallpaper";
})(Category = exports.Category || (exports.Category = {}));
var CeilingType;
(function (CeilingType) {
    CeilingType["Cloth"] = "Cloth";
    CeilingType["Gold"] = "Gold";
    CeilingType["Plain"] = "Plain";
    CeilingType["Stone"] = "Stone";
    CeilingType["Tile"] = "Tile";
    CeilingType["Wood"] = "Wood";
})(CeilingType = exports.CeilingType || (exports.CeilingType = {}));
var Color;
(function (Color) {
    Color["Beige"] = "Beige";
    Color["Black"] = "Black";
    Color["Blue"] = "Blue";
    Color["Brown"] = "Brown";
    Color["Colorful"] = "Colorful";
    Color["Gray"] = "Gray";
    Color["Green"] = "Green";
    Color["LightBlue"] = "Light blue";
    Color["Orange"] = "Orange";
    Color["Pink"] = "Pink";
    Color["Purple"] = "Purple";
    Color["Red"] = "Red";
    Color["White"] = "White";
    Color["Yellow"] = "Yellow";
})(Color = exports.Color || (exports.Color = {}));
var CurtainType;
(function (CurtainType) {
    CurtainType["Curtains"] = "Curtains";
    CurtainType["RollerShades"] = "Roller Shades";
    CurtainType["SlattedBlinds"] = "Slatted Blinds";
})(CurtainType = exports.CurtainType || (exports.CurtainType = {}));
var Gender;
(function (Gender) {
    Gender["Female"] = "Female";
    Gender["Male"] = "Male";
})(Gender = exports.Gender || (exports.Gender = {}));
var Hobby;
(function (Hobby) {
    Hobby["Education"] = "Education";
    Hobby["Fashion"] = "Fashion";
    Hobby["Fitness"] = "Fitness";
    Hobby["Music"] = "Music";
    Hobby["Nature"] = "Nature";
    Hobby["Play"] = "Play";
})(Hobby = exports.Hobby || (exports.Hobby = {}));
var LightingType;
(function (LightingType) {
    LightingType["Candle"] = "Candle";
    LightingType["Emission"] = "Emission";
    LightingType["Fluorescent"] = "Fluorescent";
    LightingType["Monitor"] = "Monitor";
    LightingType["Spotlight"] = "Spotlight";
})(LightingType = exports.LightingType || (exports.LightingType = {}));
var PaneType;
(function (PaneType) {
    PaneType["Glass"] = "Glass";
    PaneType["Screen"] = "Screen";
})(PaneType = exports.PaneType || (exports.PaneType = {}));
var Personality;
(function (Personality) {
    Personality["BigSister"] = "Big sister";
    Personality["Cranky"] = "Cranky";
    Personality["Jock"] = "Jock";
    Personality["Lazy"] = "Lazy";
    Personality["Normal"] = "Normal";
    Personality["Peppy"] = "Peppy";
    Personality["Smug"] = "Smug";
    Personality["Snooty"] = "Snooty";
})(Personality = exports.Personality || (exports.Personality = {}));
var PrimaryShape;
(function (PrimaryShape) {
    PrimaryShape["ALine"] = "A-line";
    PrimaryShape["ALong"] = "A-long";
    PrimaryShape["BLong"] = "B-long";
    PrimaryShape["Balloon"] = "Balloon";
    PrimaryShape["Box"] = "Box";
    PrimaryShape["Dress"] = "Dress";
    PrimaryShape["Kimono"] = "Kimono";
    PrimaryShape["Overall"] = "Overall";
    PrimaryShape["Rib"] = "Rib";
    PrimaryShape["Robe"] = "Robe";
    PrimaryShape["Salopette"] = "Salopette";
})(PrimaryShape = exports.PrimaryShape || (exports.PrimaryShape = {}));
var Rarity;
(function (Rarity) {
    Rarity["Common"] = "Common";
    Rarity["Rare"] = "Rare";
    Rarity["UltraRare"] = "Ultra-rare";
    Rarity["Uncommon"] = "Uncommon";
})(Rarity = exports.Rarity || (exports.Rarity = {}));
var SeasonalAvailability;
(function (SeasonalAvailability) {
    SeasonalAvailability["AllYear"] = "All Year";
    SeasonalAvailability["Summer"] = "Summer";
    SeasonalAvailability["Winter"] = "Winter";
})(SeasonalAvailability = exports.SeasonalAvailability || (exports.SeasonalAvailability = {}));
var SecondaryShape;
(function (SecondaryShape) {
    SecondaryShape["H"] = "H";
    SecondaryShape["L"] = "L";
    SecondaryShape["N"] = "N";
})(SecondaryShape = exports.SecondaryShape || (exports.SecondaryShape = {}));
var Size;
(function (Size) {
    Size["The05X1"] = "0.5x1";
    Size["The15X15"] = "1.5x1.5";
    Size["The1X05"] = "1x0.5";
    Size["The1X1"] = "1x1";
    Size["The1X15"] = "1x1.5";
    Size["The1X2"] = "1x2";
    Size["The2X05"] = "2x0.5";
    Size["The2X1"] = "2x1";
    Size["The2X15"] = "2x1.5";
    Size["The2X2"] = "2x2";
    Size["The3X1"] = "3x1";
    Size["The3X2"] = "3x2";
    Size["The3X3"] = "3x3";
    Size["The4X3"] = "4x3";
    Size["The4X4"] = "4x4";
    Size["The5X5"] = "5x5";
})(Size = exports.Size || (exports.Size = {}));
var SourceSheet;
(function (SourceSheet) {
    SourceSheet["Accessories"] = "Accessories";
    SourceSheet["Art"] = "Art";
    SourceSheet["Bags"] = "Bags";
    SourceSheet["Bottoms"] = "Bottoms";
    SourceSheet["Bugs"] = "Bugs";
    SourceSheet["Construction"] = "Construction";
    SourceSheet["DressUp"] = "Dress-Up";
    SourceSheet["Fencing"] = "Fencing";
    SourceSheet["Fish"] = "Fish";
    SourceSheet["Floors"] = "Floors";
    SourceSheet["Fossils"] = "Fossils";
    SourceSheet["Headwear"] = "Headwear";
    SourceSheet["Housewares"] = "Housewares";
    SourceSheet["Miscellaneous"] = "Miscellaneous";
    SourceSheet["Music"] = "Music";
    SourceSheet["NookMiles"] = "Nook Miles";
    SourceSheet["Other"] = "Other";
    SourceSheet["Photos"] = "Photos";
    SourceSheet["Posters"] = "Posters";
    SourceSheet["Recipes"] = "Recipes";
    SourceSheet["Rugs"] = "Rugs";
    SourceSheet["Shoes"] = "Shoes";
    SourceSheet["Socks"] = "Socks";
    SourceSheet["Tools"] = "Tools";
    SourceSheet["Tops"] = "Tops";
    SourceSheet["Umbrellas"] = "Umbrellas";
    SourceSheet["Villagers"] = "Villagers";
    SourceSheet["WallMounted"] = "Wall-mounted";
    SourceSheet["Wallpapers"] = "Wallpapers";
})(SourceSheet = exports.SourceSheet || (exports.SourceSheet = {}));
var SpeakerType;
(function (SpeakerType) {
    SpeakerType["Cheap"] = "Cheap";
    SpeakerType["HiFi"] = "Hi-fi";
    SpeakerType["Phono"] = "Phono";
    SpeakerType["Retro"] = "Retro";
})(SpeakerType = exports.SpeakerType || (exports.SpeakerType = {}));
var Style;
(function (Style) {
    Style["Active"] = "Active";
    Style["Cool"] = "Cool";
    Style["Cute"] = "Cute";
    Style["Elegant"] = "Elegant";
    Style["EverydayComfy"] = "everyday; comfy";
    Style["Gorgeous"] = "Gorgeous";
    Style["Simple"] = "Simple";
})(Style = exports.Style || (exports.Style = {}));
var BodyTitle;
(function (BodyTitle) {
    BodyTitle["Art"] = "Art";
    BodyTitle["BagColor"] = "Bag color";
    BodyTitle["Bamboo"] = "Bamboo";
    BodyTitle["BarrelColor"] = "Barrel color";
    BodyTitle["BlockColor"] = "Block color";
    BodyTitle["Body"] = "Body";
    BodyTitle["BodyColor"] = "Body color";
    BodyTitle["BrickColor"] = "Brick color";
    BodyTitle["Can"] = "Can";
    BodyTitle["Cardboard"] = "Cardboard";
    BodyTitle["ChairBackAndSeat"] = "Chair back and seat";
    BodyTitle["Coating"] = "Coating";
    BodyTitle["Color"] = "Color";
    BodyTitle["CoverDesign"] = "Cover design";
    BodyTitle["CoverPattern"] = "Cover pattern";
    BodyTitle["Creation"] = "Creation";
    BodyTitle["Decorations"] = "Decorations";
    BodyTitle["Design"] = "Design";
    BodyTitle["Dish"] = "Dish";
    BodyTitle["Easel"] = "Easel";
    BodyTitle["Fabric"] = "Fabric";
    BodyTitle["Finish"] = "Finish";
    BodyTitle["Flavor"] = "Flavor";
    BodyTitle["FlowerColor"] = "Flower color";
    BodyTitle["Food"] = "Food";
    BodyTitle["Frame"] = "Frame";
    BodyTitle["FruitType"] = "Fruit type";
    BodyTitle["Genre"] = "Genre";
    BodyTitle["HayCondition"] = "Hay condition";
    BodyTitle["Illumination"] = "Illumination";
    BodyTitle["KnitCapColor"] = "Knit-cap color";
    BodyTitle["LightColor"] = "Light color";
    BodyTitle["LumberType"] = "Lumber type";
    BodyTitle["MapCenter"] = "Map center";
    BodyTitle["MushroomType"] = "Mushroom type";
    BodyTitle["Name"] = "Name";
    BodyTitle["Navigation"] = "Navigation";
    BodyTitle["NutColor"] = "Nut color";
    BodyTitle["Paint"] = "Paint";
    BodyTitle["PaintColor"] = "Paint color";
    BodyTitle["PlateColor"] = "Plate color";
    BodyTitle["RoofColor"] = "Roof color";
    BodyTitle["Season"] = "Season";
    BodyTitle["ShellColor"] = "Shell color";
    BodyTitle["Sign"] = "Sign";
    BodyTitle["Stone"] = "Stone";
    BodyTitle["Tabletop"] = "Tabletop";
    BodyTitle["TireColor"] = "Tire color";
    BodyTitle["Variation"] = "Variation";
})(BodyTitle = exports.BodyTitle || (exports.BodyTitle = {}));
var LabelTheme;
(function (LabelTheme) {
    LabelTheme["Comfy"] = "comfy";
    LabelTheme["Everyday"] = "everyday";
    LabelTheme["FairyTale"] = "fairy tale";
    LabelTheme["Formal"] = "formal";
    LabelTheme["Goth"] = "goth";
    LabelTheme["Outdoorsy"] = "outdoorsy";
    LabelTheme["Party"] = "party";
    LabelTheme["Sporty"] = "sporty";
    LabelTheme["Theatrical"] = "theatrical";
    LabelTheme["Vacation"] = "vacation";
    LabelTheme["Work"] = "work";
})(LabelTheme = exports.LabelTheme || (exports.LabelTheme = {}));
var Theme;
(function (Theme) {
    Theme["Bathroom"] = "bathroom";
    Theme["ChildSRoom"] = "child's room";
    Theme["Concert"] = "concert";
    Theme["Den"] = "den";
    Theme["Expensive"] = "expensive";
    Theme["Facility"] = "facility";
    Theme["Fancy"] = "fancy";
    Theme["Fitness"] = "fitness";
    Theme["FolkArt"] = "folk art";
    Theme["FreezingCold"] = "freezing cold";
    Theme["Garage"] = "garage";
    Theme["Garden"] = "garden";
    Theme["Horror"] = "horror";
    Theme["Kitchen"] = "kitchen";
    Theme["LivingRoom"] = "living room";
    Theme["Music"] = "music";
    Theme["Ocean"] = "ocean";
    Theme["Office"] = "office";
    Theme["Outdoors"] = "outdoors";
    Theme["Party"] = "party";
    Theme["School"] = "school";
    Theme["Shop"] = "shop";
    Theme["Space"] = "space";
    Theme["ZenStyle"] = "zen-style";
})(Theme = exports.Theme || (exports.Theme = {}));
var VariantID;
(function (VariantID) {
    VariantID["The0_0"] = "0_0";
    VariantID["The0_1"] = "0_1";
    VariantID["The0_2"] = "0_2";
    VariantID["The0_3"] = "0_3";
    VariantID["The0_4"] = "0_4";
    VariantID["The0_5"] = "0_5";
    VariantID["The0_6"] = "0_6";
    VariantID["The0_7"] = "0_7";
    VariantID["The1_0"] = "1_0";
    VariantID["The1_1"] = "1_1";
    VariantID["The1_2"] = "1_2";
    VariantID["The1_3"] = "1_3";
    VariantID["The1_4"] = "1_4";
    VariantID["The1_5"] = "1_5";
    VariantID["The1_6"] = "1_6";
    VariantID["The1_7"] = "1_7";
    VariantID["The2_0"] = "2_0";
    VariantID["The2_1"] = "2_1";
    VariantID["The2_2"] = "2_2";
    VariantID["The2_3"] = "2_3";
    VariantID["The2_4"] = "2_4";
    VariantID["The2_5"] = "2_5";
    VariantID["The2_6"] = "2_6";
    VariantID["The2_7"] = "2_7";
    VariantID["The3_0"] = "3_0";
    VariantID["The3_1"] = "3_1";
    VariantID["The3_2"] = "3_2";
    VariantID["The3_3"] = "3_3";
    VariantID["The3_4"] = "3_4";
    VariantID["The3_5"] = "3_5";
    VariantID["The3_6"] = "3_6";
    VariantID["The3_7"] = "3_7";
    VariantID["The4_0"] = "4_0";
    VariantID["The4_1"] = "4_1";
    VariantID["The4_2"] = "4_2";
    VariantID["The4_3"] = "4_3";
    VariantID["The4_4"] = "4_4";
    VariantID["The4_5"] = "4_5";
    VariantID["The4_6"] = "4_6";
    VariantID["The4_7"] = "4_7";
    VariantID["The5_0"] = "5_0";
    VariantID["The5_1"] = "5_1";
    VariantID["The5_2"] = "5_2";
    VariantID["The5_3"] = "5_3";
    VariantID["The5_4"] = "5_4";
    VariantID["The5_5"] = "5_5";
    VariantID["The5_6"] = "5_6";
    VariantID["The5_7"] = "5_7";
    VariantID["The6_0"] = "6_0";
    VariantID["The6_1"] = "6_1";
    VariantID["The6_2"] = "6_2";
    VariantID["The6_3"] = "6_3";
    VariantID["The6_4"] = "6_4";
    VariantID["The6_5"] = "6_5";
    VariantID["The6_6"] = "6_6";
    VariantID["The6_7"] = "6_7";
    VariantID["The7_0"] = "7_0";
    VariantID["The7_1"] = "7_1";
    VariantID["The7_2"] = "7_2";
    VariantID["The7_3"] = "7_3";
    VariantID["The7_4"] = "7_4";
    VariantID["The7_5"] = "7_5";
    VariantID["The7_6"] = "7_6";
    VariantID["The7_7"] = "7_7";
})(VariantID = exports.VariantID || (exports.VariantID = {}));
var Version;
(function (Version) {
    Version["The100"] = "1.0.0";
    Version["The110"] = "1.1.0";
    Version["The110A"] = "1.1.0a";
    Version["The120"] = "1.2.0";
})(Version = exports.Version || (exports.Version = {}));
var VfxType;
(function (VfxType) {
    VfxType["LightOff"] = "LightOff";
    VfxType["Random"] = "Random";
    VfxType["Synchro"] = "Synchro";
})(VfxType = exports.VfxType || (exports.VfxType = {}));
var Weather;
(function (Weather) {
    Weather["AnyExceptRain"] = "Any except rain";
    Weather["AnyWeather"] = "Any weather";
    Weather["RainOnly"] = "Rain only";
})(Weather = exports.Weather || (exports.Weather = {}));
var WindowColor;
(function (WindowColor) {
    WindowColor["BlackMetal"] = "Black Metal";
    WindowColor["DarkWood"] = "Dark Wood";
    WindowColor["GreyMetal"] = "Grey Metal";
    WindowColor["GreyWood"] = "Grey Wood";
    WindowColor["LightWood"] = "Light Wood";
    WindowColor["NaturalWood"] = "Natural Wood";
    WindowColor["WhiteMetal"] = "White Metal";
    WindowColor["WhiteWood"] = "White Wood";
    WindowColor["Wood"] = "Wood";
})(WindowColor = exports.WindowColor || (exports.WindowColor = {}));
var WindowType;
(function (WindowType) {
    WindowType["Arch"] = "Arch";
    WindowType["Circle"] = "Circle";
    WindowType["FourPane"] = "Four Pane";
    WindowType["SinglePane"] = "Single Pane";
    WindowType["SlidingPane"] = "Sliding Pane";
})(WindowType = exports.WindowType || (exports.WindowType = {}));
//# sourceMappingURL=all.js.map