import React, { useRef, useLayoutEffect } from "react";
import { useGLTF, useAnimations, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";

export default function Model(props) {
  const scrollIt = useRef(true);
  const group = useRef();
  const scroll = useScroll();
  const tl = useRef();

  const { nodes, materials, animations } = useGLTF("/1499.gltf");

  useFrame(({ scene }) => {
    if (scrollIt.current) {
      scene.rotation.y += 0.003;
    } else {
      if (scene.rotation.y > 0) scene.rotation.y -= 0.03;
    }
  });
  useFrame((state, delta) => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline({
      defaults: { duration: 2, ease: "power1.inOut" },
    });
    tl.current
      .to(
        document.getElementsByClassName("text-div")[0],
        { opacity: 0, duration: 4 },
        0
      )
      .to(
        document.getElementsByClassName("text-behind")[0],
        { fontSize: 1000, duration: 4 },
        0
      )
      .to(
        document.getElementsByClassName("text-stroked-infront")[0],
        { fontSize: 1000, duration: 4 },
        0
      )
      .to(scrollIt, { current: false }, 0.3)
      .to(group.current.position, { x: -55, duration: 4 }, 2)
      .to(group.current.rotation, { y: 0.6, duration: 4 }, 2)
      .to(group.current.position, { x: 50, duration: 4 }, 7)
      .to(group.current.position, { z: 50, duration: 4 }, 7)
      .to(group.current.position, { y: -53, duration: 4 }, 7)
      .to(group.current.rotation, { y: -0.6, duration: 4 }, 7)
      .to(group.current.position, { x: -35, duration: 4 }, 12)
      .to(group.current.rotation, { y: 1, duration: 4 }, 12)
      .to(group.current.rotation, { x: -0.5, duration: 4 }, 12);
  }, []);

  // eslint-disable-next-line
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <group
          name="Root-Global"
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-1, 1, 1]}
        >
          <group name="Root-Local" />
          <group
            name="Controller-Global"
            position={[0, 16.609, 0]}
            rotation={[Math.PI, 0, Math.PI]}
          >
            <group name="Controller-Local" />
            <group
              name="Hip-Global"
              position={[0, 14.5, 0]}
              rotation={[-0.107, 0.785, 0.045]}
            >
              <mesh
                name="Hip-Local"
                castShadow
                receiveShadow
                geometry={nodes["Hip-Local"].geometry}
                material={materials["body_hip-Material"]}
              />
              <group
                name="Belly-Global"
                position={[0, 2.5, 0]}
                rotation={[0.088, -0.089, 0.008]}
              >
                <group name="Belly-Local" />
                <group
                  name="Chest-Global"
                  position={[0, 1, -1.499]}
                  rotation={[0.307, -0.083, 0.015]}
                >
                  <mesh
                    name="Chest-Local"
                    castShadow
                    receiveShadow
                    geometry={nodes["Chest-Local"].geometry}
                    material={materials["body_chest-Material"]}
                    position={[0, 12, 2.5]}
                  />
                  <group
                    name="Head-Global"
                    position={[-0.008, 30, 6]}
                    rotation={[-0.163, -0.619, 0.092]}
                  >
                    <mesh
                      name="Head-Local"
                      castShadow
                      receiveShadow
                      geometry={nodes["Head-Local"].geometry}
                      material={materials["body_head-Material"]}
                      position={[0, 8.5, 0]}
                    />
                    <group name="Head_Accessories-Global">
                      <mesh
                        name="Head_Accessories-Local"
                        castShadow
                        receiveShadow
                        geometry={nodes["Head_Accessories-Local"].geometry}
                        material={materials["head_accessory-Material"]}
                        position={[0, 7.5, 2.5]}
                      />
                      <group name="Hat-Global">
                        <mesh
                          name="Hat-Local"
                          castShadow
                          receiveShadow
                          geometry={nodes["Hat-Local"].geometry}
                          material={materials["hat-Material"]}
                          position={[0, 14.5, 1.5]}
                        />
                      </group>
                      <group name="Eyes-Global">
                        <mesh
                          name="Eyes-Local"
                          castShadow
                          receiveShadow
                          geometry={nodes["Eyes-Local"].geometry}
                          material={materials["eyes-Material"]}
                          position={[0, 13.5, 9.5]}
                        />
                      </group>
                      <group name="Mouth-Global">
                        <mesh
                          name="Mouth-Local"
                          castShadow
                          receiveShadow
                          geometry={nodes["Mouth-Local"].geometry}
                          material={materials["mouth-Material"]}
                          position={[0, 4.5, 10.5]}
                        />
                      </group>
                      <group name="Ears_Skin-Global">
                        <mesh
                          name="Ears_Skin-Local"
                          castShadow
                          receiveShadow
                          geometry={nodes["Ears_Skin-Local"].geometry}
                          material={materials["skin_ears-Material"]}
                          position={[0, 11.5, 0.5]}
                        />
                      </group>
                    </group>
                  </group>
                  <group
                    name="Left_Arm-Global"
                    position={[-19.5, 26, 2]}
                    rotation={[-0.173, -0.153, -0.248]}
                  >
                    <mesh
                      name="Left_Arm-Local"
                      castShadow
                      receiveShadow
                      geometry={nodes["Left_Arm-Local"].geometry}
                      material={materials["body_left_arm-Material"]}
                      position={[-2, -6, 0.5]}
                    />
                    <group
                      name="Left_Forearm-Global"
                      position={[-2.528, -17, 2]}
                      rotation={[-0.749, -0.188, 0.34]}
                    >
                      <mesh
                        name="Left_Forearm-Local"
                        castShadow
                        receiveShadow
                        geometry={nodes["Left_Forearm-Local"].geometry}
                        material={materials["body_left_forearm-Material"]}
                        position={[0, -7, 0]}
                      />
                      <group
                        name="Left_Hand-Global"
                        position={[-0.004, -16, 3]}
                        rotation={[0.232, -0.956, 1.432]}
                      >
                        <mesh
                          name="Left_Hand-Local"
                          castShadow
                          receiveShadow
                          geometry={nodes["Left_Hand-Local"].geometry}
                          material={materials["body_left_hand-Material"]}
                          position={[-6, 0, 0]}
                        />
                        <group name="Left_Hand_Skin-Global">
                          <mesh
                            name="Left_Hand_Skin-Local"
                            castShadow
                            receiveShadow
                            geometry={nodes["Left_Hand_Skin-Local"].geometry}
                            material={materials["skin_left_hand-Material"]}
                            position={[-7.5, -0.5, -2]}
                          />
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="Right_Arm-Global"
                    position={[19.5, 26, 2]}
                    rotation={[0.043, -0.108, 0.366]}
                  >
                    <mesh
                      name="Right_Arm-Local"
                      castShadow
                      receiveShadow
                      geometry={nodes["Right_Arm-Local"].geometry}
                      material={materials["body_right_arm-Material"]}
                      position={[2, -6, 0.5]}
                    />
                    <group
                      name="Right_Forearm-Global"
                      position={[2.5, -17, 2]}
                      rotation={[-0.592, 0.15, -1.831]}
                    >
                      <mesh
                        name="Right_Forearm-Local"
                        castShadow
                        receiveShadow
                        geometry={nodes["Right_Forearm-Local"].geometry}
                        material={materials["body_right_forearm-Material"]}
                        position={[7, 0, 0]}
                      />
                      <group
                        name="Right_Hand-Global"
                        position={[16, 0, 3]}
                        rotation={[-1.04, -0.051, -0.095]}
                      >
                        <mesh
                          name="Right_Hand-Local"
                          castShadow
                          receiveShadow
                          geometry={nodes["Right_Hand-Local"].geometry}
                          material={materials["body_right_hand-Material"]}
                          position={[6, 0, 0]}
                        />
                        <group name="Right_Hand_Skin-Global">
                          <mesh
                            name="Right_Hand_Skin-Local"
                            castShadow
                            receiveShadow
                            geometry={nodes["Right_Hand_Skin-Local"].geometry}
                            material={materials["skin_right_hand-Material"]}
                            position={[7.5, -0.5, -2]}
                          />
                        </group>
                      </group>
                    </group>
                  </group>
                  <group name="Chest_Accessories-Global">
                    <mesh
                      name="Chest_Accessories-Local"
                      castShadow
                      receiveShadow
                      geometry={nodes["Chest_Accessories-Local"].geometry}
                      material={materials["chest_accessory-Material"]}
                      position={[0, 17.5, 14]}
                    />
                    <group name="Chest_Skin-Global">
                      <mesh
                        name="Chest_Skin-Local"
                        castShadow
                        receiveShadow
                        geometry={nodes["Chest_Skin-Local"].geometry}
                        material={materials["skin_chest-Material"]}
                        position={[0, 10.5, 12.5]}
                      />
                    </group>
                  </group>
                </group>
              </group>
              <group
                name="Right_Thigh-Global"
                position={[8, -4, -1.52]}
                rotation={[-0.431, 0.049, 0.594]}
              >
                <mesh
                  name="Right_Thigh-Local"
                  castShadow
                  receiveShadow
                  geometry={nodes["Right_Thigh-Local"].geometry}
                  material={materials["body_right_thigh-Material"]}
                  position={[1, -6, -0.5]}
                />
                <group
                  name="Right_Leg-Global"
                  position={[1, -15.5, 0.549]}
                  rotation={[1.178, 0, 0]}
                >
                  <mesh
                    name="Right_Leg-Local"
                    castShadow
                    receiveShadow
                    geometry={nodes["Right_Leg-Local"].geometry}
                    material={materials["body_right_leg-Material"]}
                    position={[0.5, -6.5, -0.5]}
                  />
                  <group
                    name="Right_Foot-Global"
                    position={[0, -16, 0]}
                    rotation={[-0.559, 0.11, -0.456]}
                  >
                    <mesh
                      name="Right_Foot-Local"
                      castShadow
                      receiveShadow
                      geometry={nodes["Right_Foot-Local"].geometry}
                      material={materials["body_right_foot-Material"]}
                      position={[1, -1, 3.5]}
                    />
                  </group>
                </group>
              </group>
              <group
                name="Left_Thigh-Global"
                position={[-8, -4, -1.469]}
                rotation={[-0.878, -0.228, -0.718]}
              >
                <mesh
                  name="Left_Thigh-Local"
                  castShadow
                  receiveShadow
                  geometry={nodes["Left_Thigh-Local"].geometry}
                  material={materials["body_left_thigh-Material"]}
                  position={[-1, -6, -0.5]}
                />
                <group
                  name="Left_Leg-Global"
                  position={[-1, -15.5, 0.5]}
                  rotation={[1.005, 0, 0]}
                >
                  <mesh
                    name="Left_Leg-Local"
                    castShadow
                    receiveShadow
                    geometry={nodes["Left_Leg-Local"].geometry}
                    material={materials["body_left_leg-Material"]}
                    position={[-0.5, -6.5, -0.5]}
                  />
                  <group
                    name="Left_Foot-Global"
                    position={[0, -16, 0]}
                    rotation={[-0.004, -0.08, 0.273]}
                  >
                    <mesh
                      name="Left_Foot-Local"
                      castShadow
                      receiveShadow
                      geometry={nodes["Left_Foot-Local"].geometry}
                      material={materials["body_left_foot-Material"]}
                      position={[-1, -1, 3.5]}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/1499.gltf");
