import { withRouter  } from 'next/router'

 function Watch({ router }) {
     if(router?.query?.video) {
        return (
            <>
                  <div className="container mx-auto px-4 bg-index-flowers">
                    <h1 className="text-center text-5xl p-5">האתר של מנש</h1>
                    <div className="flex flex-row flex-wrap justify-evenly p-5">
                        <video src={('/' + router.query.video)} controls></video>
                    </div>
                </div>
            </>
        )
     } else {
        return (
            <>
                  <div className="container mx-auto px-4 bg-index-flowers">
                    <h1 className="text-center text-5xl p-5">האתר של מנש</h1>
                    <div className="flex flex-row flex-wrap justify-evenly p-5">
                        loading...
                    </div>
                </div>
            </>
        )
     }

  }

  export default withRouter(Watch);
  