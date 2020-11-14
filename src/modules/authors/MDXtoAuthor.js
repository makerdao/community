import { Children } from "react";

//Must an array like
/* {
			"login": "MaximumCrash" <- ### Maximum Crash
			"name": "Réjon Taylor-Foster" <- # Rejon Taylor-Foster
			"avatar_url": image url <- ![Image](https://imageurl.com)
			"profile": personal website, <- [Website](https://website.com)
			"contributions": [ <- UL "- code  -a11y" ect. 
				code, 
				a11y,
				ect...
			],
			"description": String <-- ## Description text (Not provided by allContributers)
			}*/
const converter = (mdxObj) => {
  const contributorData = {};

  //Check for image
  if (mdxObj.props.mdxType === "img" || mdxObj.props.mdxType === "Image") {
    contributorData["avatar_url"] = mdxObj.props.src;
    return contributorData;
  } else if (typeof mdxObj.props.children === "object") {
    const imgChild = mdxObj.props.children;

    if (
      imgChild &&
      !Array.isArray(imgChild) &&
      (imgChild.props.mdxType === "img" || imgChild.props.mdxType === "Image")
    ) {
      contributorData["avatar_url"] = imgChild.props.src;
      return contributorData;
    }
  }

  //Check for Link
  if (mdxObj.props.mdxType === "Link" || mdxObj.props.mdxType === "a") {
    contributorData["profile"] = mdxObj.props.href || mdxObj.props.to;
    return contributorData;
  } else if (typeof mdxObj.props.children === "object") {
    const linkChild = mdxObj.props.children;

    if (
      linkChild &&
      !Array.isArray(linkChild) &&
      (linkChild.props.mdxType === "Link" || linkChild.props.mdxType === "a")
    ) {
      contributorData["profile"] = linkChild.props.href || linkChild.props.to;
      return contributorData;
    }
  }

  //Check for Name
  if (mdxObj.props.mdxType === "h1") {
    contributorData["name"] = mdxObj.props.children;
    return contributorData;
  }

  //Check for Description
  if (mdxObj.props.mdxType === "h2") {
    contributorData["description"] = mdxObj.props.children;
    return contributorData;
  }

  //Check for Login
  if (mdxObj.props.mdxType === "h3") {
    contributorData["login"] = mdxObj.props.children;
    return contributorData;
  }

  //Check for Contributions
  if (mdxObj.props.mdxType === "ul" || mdxObj.props.mdxType === "ol") {
    const contribList = Children.toArray(mdxObj.props.children);

    contribList.forEach((li) => {
      if (!contributorData["contributions"]) {
        contributorData["contributions"] = [];
      }

      contributorData["contributions"].push(li.props.children);
    });
  }

  return contributorData;
};

const MDXtoAuthor = (children, isList) => {
  if (children.length <= 0) {
    return [];
  }

  //Only accept "Box" components as proper author data containers.
  return children
    .filter(
      (child) =>
        child.props.mdxType === "Box" && child.props.children.length > 0
    )
    .map((child) => {
      const outObj = {};

      if (Array.isArray(child.props.children)) {
        child.props.children.forEach((ch) => {
          const cData = converter(ch);

          const key = Object.keys(cData);

          if (key.length !== 0) {
            // If our outObj[key] has data and we're rendering in list format.
            if (outObj[key] !== undefined && isList) {
              //NOTE(Rejon): This looks funky, but it's only because we have cases where the data can be a string OR an array.
              outObj[key] = !Array.isArray(outObj[key])
                ? [outObj[key], cData[key]]
                : [...outObj[key], cData[key]];
            } else {
              outObj[key] = cData[key];
            }
          }
        });
      } else {
        const cData = converter(child);
        const key = Object.keys(cData);

        if (key.length !== 0) {
          outObj[key] = cData[key];
        }
      }

      return outObj;
    });
};

export default MDXtoAuthor;
