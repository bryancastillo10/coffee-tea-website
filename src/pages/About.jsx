const About = () => {
  return (
    <main className="flex h-full m-0 p-0">
        <div className="flex flex-col w-full">
        <div class=" bg-blue-200 p-4">
            <h2 class="text-lg font-semibold mb-2">About Section 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>


        <div class=" bg-green-200 p-4">
            <h2 class="text-lg font-semibold mb-2">About Section 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        </div>

        <div class="w-full md:w-full  bg-yellow-200 p-4">
            <h2 class="text-lg font-semibold mb-2">About Section 3</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec nunc sit amet lorem consectetur tincidunt vel nec justo.</p>
        </div>
    </main>
  );
};

export default About;
