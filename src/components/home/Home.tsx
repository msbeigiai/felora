import { Button, Grid, Link, Stack } from "@mui/material";
import { useState } from "react";
import profile from "../../assets/profile/profile.png";
import sec_1 from "../../data/Images";
import Footer from "../footer/Footer";
import MenuItem from "../menu-item/MenuItem";
import Nav from "../navbar/Nav";
import Sidebar from "../sidebar/Sidebar";
import GalleryCarousel from "./GalleryCarousel";
import "./Home.css";
import MultiItemCarousel from "./MultiItemCarousel";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div>
      <Nav onClickShoppingButton={() => setIsSidebarOpen(true)} />
      <div className=" bg-app-background">
        <section className="banner relative flex flex-col justify-center items-center">
          <div className="w-[50vw] z-10 text-center"></div>
          <Grid container spacing={2} justifyItems={"start"}>
            <Grid item md={7}></Grid>
            <Grid item md={5}>
              <h1 className="text-5xl w-[25vw] font-bold ml-24 leading-snug">
                اینحا به روش ساده یاد می گیریم اثر هنری خلق کنیم.
              </h1>
            </Grid>
            <Grid item md={7}></Grid>
            <Grid item md={5}>
              <Stack
                spacing={1}
                direction="column"
                maxWidth={"250px"}
                mt={"10px"}
              >
                <Button
                  variant="contained"
                  sx={{
                    background: "#ff5198",
                    borderRadius: 1,
                    color: "#000",
                    py: 1,
                    fontFamily: "afsaneh",
                    fontSize: 30,
                    ":hover": {
                      bgcolor: "#ff5180",
                      color: "white",
                    },
                  }}
                >
                  دیدن همه دوره ها
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    background: "#7ef8ff",
                    borderRadius: 1,
                    color: "#000",
                    py: 1,
                    fontFamily: "afsaneh",
                    fontSize: 30,
                    ":hover": {
                      bgcolor: "#7ef8ff",
                      color: "white",
                    },
                  }}
                >
                  مطالب آموزشی
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </section>
        <section className="p-10 lg:py-10 lg:px-20 -z-10 border-b-4">
          <h3 className="font-afsaneh text-7xl font-semibol py-3 pb-10 text-center">
            دوره های آموزشی
          </h3>
          <MultiItemCarousel />
        </section>
        <section className="p-20 border-b-4 gallary">
          <h3 className="font-afsaneh text-7xl font-semibol py-3 pb-10 text-center">
            گالری
          </h3>
          <GalleryCarousel />
        </section>
        <section id="edu" className="p-10 border-b-4">
          <div className="flex">
            <div className="flex-1 px-10">
              <h3 className="font-afsaneh text-7xl font-semibol pb-8">
                مطالب آموزشی
              </h3>
              <p className="font-afsaneh text-3xl text-slate-500 font-semibold leading-loose">
                هنر، بیان خلاقانه و احساسات انسانی از طریق اشکال مختلفی همچون
                نقاشی، موسیقی، تئاتر و ادبیات است. این پدیده فرهنگی با تاریخ
                طولانی خود به انسان‌ها این امکان را می‌دهد که تجربیات و ایده‌های
                خود را به گونه‌ای منحصر به فرد و تأثیرگذار به دیگران منتقل کنند.
                هنر، فراتر از مرزهای زبانی و جغرافیایی، پلی برای ارتباط بین
                افراد و فرهنگ‌های مختلف ایجاد می‌کند.
              </p>
              <Link
                component="button"
                variant="body2"
                underline="none"
                justifyItems="left"
                sx={{ fontFamily: "afsaneh", fontSize: 30, color: "#8c52ff" }}
              >
                بیشتر بخوانیم...
              </Link>
            </div>
            <div>
              <img src={sec_1} />
            </div>
          </div>
          <div className="flex">
            <div className="flex-1"></div>
          </div>
        </section>
        <section
          id="whats-up"
          className="p-20  shadow-lg rounded-lg cloud-shape"
        >
          <div className="flex">
            <div className="flex-1">
              <h3 className="font-afsaneh font-semibold text-7xl py-5">
                اینجا چه خبره؟
              </h3>
              <p className="font-afsaneh font-semibold text-3xl text-slate-500 leading-loose pl-20">
                هنر، بیان خلاقانه و احساسات انسانی از طریق اشکال مختلفی همچون
                نقاشی، موسیقی، تئاتر و ادبیات است. این پدیده فرهنگی با تاریخ
                طولانی خود به انسان‌ها این امکان را می‌دهد که تجربیات و ایده‌های
                خود را به گونه‌ای منحصر به فرد و تأثیرگذار به دیگران منتقل کنند.
                هنر، فراتر از مرزهای زبانی و جغرافیایی، پلی برای ارتباط بین
                افراد و فرهنگ‌های مختلف ایجاد می‌کند.
              </p>
            </div>
            <div className="image-container">
              <img src={profile} />
            </div>
          </div>
        </section>
        <Sidebar
          isOpen={isSidebarOpen}
          onClickClose={() => setIsSidebarOpen(false)}
        >
          <MenuItem />
        </Sidebar>
        <section id="footer">
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Home;
