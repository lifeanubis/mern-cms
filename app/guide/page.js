import React from "react"

const Guide = () => {
  return (
    <div className="w-screen h-full  grid grid-cols-1 content-center place-items-center p-5 ">
      <div className="">
        <h1 className="text-2xl font-bold">
          {" "}
          This is sort of a readme to use the app{" "}
        </h1>
      </div>
      <div className="text-start w-full ">
        <h2 className="text-xl font-bold"> App sections</h2>
        <div>
          <h3 className="text-lg font-medium bg-green-800 p-4 "> ADMIN - </h3>
          <p className="text-lg">
            As admin you can add/delete more or less every thing that appers on
            user site and data is stored on a mongo db data base{" "}
          </p>
        </div>
        <div>
          <h3 className="text-lg font-medium"> add header pages - </h3>
          <p className="text-lg">
            title can be any thing but header path name should me of order:-
            /something
          </p>
        </div>
        <div>
          <h3 className="text-lg font-medium"> add diamond cards - </h3>
          <p className="text-lg">you can add name rarity and price</p>
        </div>
        <div>
          <h3 className="text-lg font-medium"> browse plugins - </h3>
          <p className="text-lg">
            you can not directly install plugins rather you can click on link
            download them and paste them in pluginsw folder and run them locally
          </p>
        </div>
        <div>
          <h3 className="text-lg font-medium"> change banner - </h3>
          <p className="text-lg">
            you can change the hero image of the landng page but only urls sre
            allowed like :-
            https://media.istockphoto.com/id/182162204/photo/diamond.jpg?s=1024x1024&w=is&k=20&c=u73hRHo91zuI2VpzpfQjQMi2TM4mtW46O8UNAAVEZSs=
          </p>
        </div>
        <div>
          <h3 className="text-lg font-medium bg-green-800 p-4"> User - </h3>
          <p className="text-lg">as user you can view every thing</p>
        </div>

        <div>
          <h3 className="text-lg font-medium bg-orange-800 p-4">
            Limitations -{" "}
          </h3>
          <p className="text-lg">
            since this is a test app so validations and loaders are skipped file
            upload is also skipped
          </p>
          <p className="text-lg">
            plugins can only be used in local system by cloning the repo and
            adding plugins folder from browse plugins list
          </p>
        </div>
        <div>
          <h3 className="text-lg font-medium bg-green-800 p-4">Plugins</h3>
          <p> For test purposes i have added image carousel plugin </p>
        </div>
        <div>
          <h3 className="text-lg font-medium bg-orange-800 p-4">
            Running App locally ? -{" "}
          </h3>
          <h4 className="italic text-3xl">
            {" "}
            you cannot , contact me:-
            <a
              href="https://www.linkedin.com/in/shreyansh-sharma-3386621b2/"
              target="_blank"
              className="underline text-cyan-400"
            >
              My linkedin profile
            </a>
            , just kiddin{" "}
          </h4>
          <p className="text-lg">
            running app locally might give you cors error if you try to run in
            dev mode ie you cannot enjoy the api fun locally because the api key
            and mongo related stuff is on live site but you can apply the
            downloaded plugins and run them
          </p>
          <p className="text-lg">
            plugins can only be used in local system by cloning the repo and
            adding plugins folder from browse plugins list
          </p>
        </div>
      </div>
    </div>
  )
}

export default Guide
