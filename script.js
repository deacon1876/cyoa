const scenes = {
    1: {
        text: "허인범의 대모험에 잘 오셨습니다. 당신은 울창한 정글 가장자리에 서 있고, 손에는 지도가 있습니다. 잃어버린 사원이 근처에 있다는 소문이 있습니다. 당신의 선택은?",
        image: "images/scene 1.png",
        choices: [
            { text: "희미한 길을 따라 정글로 들어가자.", nextScene: 2 },
            { text: "주변을 살피기 위해 나무에 오르자.", nextScene: 3 }
        ]
    },
    2: {
        text: "그 길은 깊은 틈새를 가로지르는 구불구불한 밧줄 다리로 이어집니다. 당신의 선택은?",
        image: "images/scene 2.png",
        choices: [
            { text: "조심해서 다리를 건너자.", nextScene: 4 },
            { text: "되돌아가서 다른 길을 찾아보자.", nextScene: 3 }
        ]
    },
    3: {
        text: "나무에서 멀리 있는 사원을 발견했지만 재규어가 아래를 배회하고 있습니다. 당신의 선택은?",
        image: "images/scene 3.png",
        choices: [
            { text: "재규어가 떠날 때까지 기다리자.", nextScene: 5 },
            { text: "재규어에게 겁을 주어 쫓아내자.", nextScene: "defeat" }
        ]
    },
    4: {
        text: "다리를 건너 사원을 발견합니다! 안에서 금 상자를 발견합니다. 당신의 승리입니다!",
        image: "images/scene 4.png",
        choices: []
    },
    5: {
        text: "재규어가 떠납니다. 늦게 사원에 도착하니 텅 비어 있습니다. 살아남았지만 보물을 찾지 못합니다.",
        image: "images/scene 5.png",
        choices: []
    },
    defeat: {
        text: "재규어가 당신을 공격합니다! 게임 오버.",
        image: "images/defeat.png",
        choices: []
    }
};

function loadScene(sceneId) {
    const scene = scenes[sceneId];
    document.getElementById("scene-image").src = scene.image;
    document.getElementById("scene-text").textContent = scene.text;
    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";

    scene.choices.forEach(choice => {
        const button = document.createElement("button");
        button.className = "choice-btn";
        button.textContent = choice.text;
        button.onclick = () => loadScene(choice.nextScene);
        choicesDiv.appendChild(button);
    });
}

// Start the game
loadScene(1);