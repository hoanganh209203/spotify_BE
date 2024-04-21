import artistModel from "../models/artist.model.js";
import trackModel from "../models/track.model.js";
import albumModel from "../models/album.model.js";
export const searchByKeyword = async (req, res) => {
  try {
    const keyword = req.query.keyword;
    if (!keyword) {
      return res.status(404).json({ message: "Bắt buộc phải có keyword" });
    }
    console.log(keyword);
    const artist = await artistModel
      .find({
        name: { $regex: keyword, $options: "i" },
      })
      .sort({ popularity: -1 });
    const track = await trackModel
      .find({
        name: { $regex: keyword, $options: "i" },
      })
      .sort({ popularity: -1 });
    const album = await albumModel
      .find({
        name: { $regex: keyword, $options: "i" },
      })
      .sort({ popularity: -1 })
      .limit(4);
    return res.json({ artist, track, album });
  } catch (error) {
    return res.status(500).json({
      message: error.name,
    });
  }
};
