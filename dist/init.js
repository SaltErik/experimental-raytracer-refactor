import { Camera } from "./camera.js";
import { Checkerboard } from "./checkerboard.js";
import { Plane } from "./plane.js";
import { RayTracer } from "./raytracer.js";
import { Scene } from "./scene.js";
import { Shiny } from "./shiny.js";
import { Sphere } from "./sphere.js";
function defaultThings() {
    const plane = new Plane({
        x: 0.0,
        y: 1.0,
        z: 0.0,
    }, 0.0, new Checkerboard());
    const sphere1 = new Sphere({
        x: 0.0,
        y: 1.0,
        z: -0.25,
    }, 1.0, new Shiny());
    const sphere2 = new Sphere({
        x: -1.0,
        y: 0.5,
        z: 1.5,
    }, 0.5, new Shiny());
    return [plane, sphere1, sphere2];
}
function defaultLights() {
    const light1 = {
        position: {
            x: -2.0,
            y: 2.5,
            z: 0.0,
        },
        color: {
            r: 0.49,
            g: 0.07,
            b: 0.07,
        },
    };
    const light2 = {
        position: {
            x: 1.5,
            y: 2.5,
            z: 1.5,
        },
        color: {
            r: 0.07,
            g: 0.07,
            b: 0.49,
        },
    };
    const light3 = {
        position: {
            x: 1.5,
            y: 2.5,
            z: -1,
        },
        color: {
            r: 0.07,
            g: 0.49,
            b: 0.07,
        },
    };
    const light4 = {
        position: {
            x: 0.0,
            y: 3.5,
            z: 0.0,
        },
        color: {
            r: 0.21,
            g: 0.21,
            b: 0.35,
        },
    };
    return [light1, light2, light3, light4];
}
function defaultCamera() {
    const position = {
        x: 3.0,
        y: 2.0,
        z: 4.0,
    };
    const lookAt = {
        x: -1.0,
        y: 0.5,
        z: 0.0,
    };
    return new Camera(position, lookAt);
}
function init() {
    const canvas = document.createElement(`canvas`);
    if (!canvas)
        throw new Error("Could not create canvas!");
    const SAME = 512;
    canvas.width = SAME;
    canvas.height = SAME;
    document.body.appendChild(canvas);
    const context = canvas.getContext(`2d`);
    if (!context)
        throw new Error("Could not get 2D context!");
    const rayTracer = new RayTracer(canvas.width, canvas.height);
    if (!rayTracer)
        throw new Error("Could not instantiate RayTracer!");
    const scene = new Scene(defaultThings(), defaultLights(), defaultCamera());
    if (!scene)
        throw new Error("Could not create scene!");
    return rayTracer.render(scene, context);
}
console.time("fullRun");
init();
console.timeEnd("fullRun");
