import SectionTitle from "../../Share/SectionTitle/SectioTitle";

const Blog = () => {
    return (
        <div className="my-24 mx-2">
            <SectionTitle heading="Blog" />
            <div className='text-left mt-10 mb-10'>
                <h1 className='font-bold text-[#ff9900]  text-lg'>1.How does React work?.</h1>
                <p className='mt-5'>React creates a virtual DOM. When state changes in a component it firstly runs a "diffing" algorithm, which identifies what has changed in the virtual DOM. The second step is reconciliation, where it updates the DOM with the results of diff.</p>
            </div>
            <div className='text-left mt-10 mb-10'>
                <h1 className='font-bold text-[#ff9900]  text-lg'>2.What are React Hooks?.</h1>
                <p className='mt-5'>Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. With Hooks, you can extract stateful logic from a component so it can be tested independently and reused. Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community.</p>
            </div>
            <div className='text-left mt-10 mb-10'>
                <h1 className='font-bold text-[#ff9900]  text-lg'>3. What do you mean by Asynchronous API?.</h1>
                <p className='mt-5'>All APIs of Node.js library are aynchronous that is non-blocking. It essentially means a Node.js based server never waits for a API to return data. Server moves to next API after calling it and a notification mechanism of Events of Node.js helps server to get response from the previous API call.</p>
            </div>
            <div className='text-left mt-10 mb-10'>
                <h1 className='font-bold text-[#ff9900]  text-lg'>4. What is Reconciliation in ReactJS?.</h1>
                <p className='mt-5'>When a component’s props or state change, React decides whether an actual DOM update is necessary by comparing the newly returned element with the previously rendered one. When they are not equal, React will update the DOM. This process is called reconciliation.</p>
            </div>
            <div className='text-left mt-10 mb-10'>
                <h1 className='font-bold text-[#ff9900]  text-lg'>5. What is Sharding in MongoDB?.</h1>
                <p className='mt-5'>Sharding is a method for distributing data across multiple machines. MongoDB uses sharding to support deployments with very large data sets and high throughput operations. MongoDB supports horizontal scaling through sharding. MongoDB shards data at the collection level, distributing the collection data across the shards in the cluster.</p>
            </div>
        </div>
    );
};

export default Blog;