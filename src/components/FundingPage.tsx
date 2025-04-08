function FundingPage() {
  return (
    <section className="mb-16 mt-8">
      <h2 className="text-xl mb-8 border-l-4 border-[#30E2DD]  text-[#30E2DD] pl-4 flex items-center">
        製作費補助
      </h2>
      <div className="font-bold rounded-full bg-[#30E2DD] text-black p-2 px-4 w-25 mb-2 flex justify-center items-center">
        入 選
      </div>
      <div className="my-4">
        入選者在完成切結書簽署後，需於{" "}
        <span className=" font-black">114年7月15日前</span>{" "}
        提交時長12至30分鐘的成片作品。社會組可獲得新台幣 20,000
        元的入選製作費補助;學生組則享有新台幣 10,000 元的入選製作費補助。
      </div>
      <div className="w-full">
        <img
          src="https://web.forestdev.work/chiayi/opencall/f01_v1.svg"
          alt="group"
          className="w-full"
        />
      </div>
      <div className="font-bold rounded-full bg-[#30E2DD] text-black p-2 px-4 w-25 mb-2 flex justify-center items-center">
        決 選
      </div>
      <div className="my-4">
        針對入選者作品，再從中進行決選，預期{" "}
        <span className=" font-black">114年7月26日</span>{" "}
        進行頒獎典禮及頒發決選製作輔導費
      </div>
      <div className="w-full flex gap-14">
        <div className="w-1/5">
          <img
            src="https://web.forestdev.work/chiayi/opencall/f02.png"
            alt="group"
            className="w-full"
          />
        </div>
        <div className="w-5/6 flex flex-col gap-10">
          <img
            src="https://web.forestdev.work/chiayi/opencall/f04.png"
            alt="group"
            className="w-full"
          />
          <img
            src="https://web.forestdev.work/chiayi/opencall/f05.png?v=2"
            alt="group"
            className="w-full"
          />
          <img
            src="https://web.forestdev.work/chiayi/opencall/f06.png?v=2"
            alt="group"
            className="w-full"
          />
        </div>
      </div>
      <div className="h-[1px] w-full bg-amber-50 my-10"></div>
      <div className="w-full flex gap-14">
        <div className="w-1/5">
          <img
            src="https://web.forestdev.work/chiayi/opencall/f03.png"
            alt="group"
            className="w-full"
          />
        </div>
        <div className="w-5/6 flex flex-col gap-10">
          <img
            src="https://web.forestdev.work/chiayi/opencall/f07.png?v=2"
            alt="group"
            className="w-full"
          />
          <img
            src="https://web.forestdev.work/chiayi/opencall/f08.png?v=2"
            alt="group"
            className="w-full"
          />
          <img
            src="https://web.forestdev.work/chiayi/opencall/f09.png?v=2"
            alt="group"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default FundingPage;
